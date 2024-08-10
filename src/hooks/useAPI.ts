import * as React from "react";

type Response<T> =
  | { status: "idle" }
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: Error;
    }
  | {
      status: "success";
      data: T;
    };

type Action<T> =
  | {
      type: "start";
    }
  | {
      type: "success";
      data: T;
    }
  | {
      type: "error";
      error: Error;
    };

function reducer<T>(_: Response<T>, action: Action<T>): Response<T> {
  switch (action.type) {
    case "start": {
      return {
        status: "loading",
      };
    }
    case "error": {
      return {
        status: "error",
        error: action.error,
      };
    }
    case "success": {
      return {
        status: "success",
        data: action.data,
      };
    }
  }
}

type Fetcher<Args, T> = (args: Args) => Promise<T>;

export default function use<Args, T>(
  fetcher: Fetcher<Args, T>,
): [Response<T>, Fetcher<Args, T>] {
  const [state, dispatch] = React.useReducer<typeof reducer<T>>(reducer, {
    status: "idle",
  });
  const ref = React.useRef(0);

  const call = React.useCallback(
    async (args: Args) => {
      dispatch({ type: "start" });
      let current = ref.current + 1;
      ref.current = current;
      async function execute() {
        const data = await fetcher(args);
        try {
          if (current !== ref.current) {
            return data;
          }
          dispatch({ type: "success", data });
          return data;
        } catch (e) {
          if (current !== ref.current) {
            throw e;
          }
          dispatch({ type: "error", error: e as Error });
          throw e;
        }
      }
      return execute();
    },
    [fetcher],
  );
  return [state, call];
}
