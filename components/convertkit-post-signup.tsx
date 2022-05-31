const ConvertKitPostSignup: React.FC<{
  collection: string;
}> = ({ collection }) => {
  const env = process.env.NODE_ENV;

  if (env !== "production") return null;

  return getScriptByCollection(collection);
};

function getScriptByCollection(collection: string) {
  switch (collection.toLowerCase()) {
    case "react":
    case "next":
    case "solid":
    case "typescript":
      return (
        <>
          <script
            async
            data-uid="8a0ab85c1e"
            src="https://thoughtful-inventor-7842.ck.page/8a0ab85c1e/index.js"
          />
          <script
            async
            data-uid="a9bf816709"
            src={"https://thoughtful-inventor-7842.ck.page/a9bf816709/index.js"}
          />
          ;
        </>
      );

    case "firebase":
      return (
        <script
          async
          data-uid="232868bc4a"
          src={"https://thoughtful-inventor-7842.ck.page/232868bc4a/index.js"}
        />
      );

    default:
      return (
        <>
          <script
            async
            data-uid="da0d688ec8"
            src="https://thoughtful-inventor-7842.ck.page/da0d688ec8/index.js"
          />

          <script
            async
            data-uid="3e3126f064"
            src={"https://thoughtful-inventor-7842.ck.page/3e3126f064/index.js"}
          />
        </>
      );
  }
}

export default ConvertKitPostSignup;
