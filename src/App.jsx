// import { createClient } from "pexels";

import { useImg } from "./useHooks/useImg";

export default function App() {
  const { url } = useImg("jewelery");
  return (
    <>
      <div>
        <img src={url} alt="" width={400} height={400} />
      </div>
    </>
  );
}
