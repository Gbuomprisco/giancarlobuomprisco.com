const ConvertKitPostSignup: React.FC<{
  collection: string;
}> = ({ collection }) => {
  const env = process.env.NODE_ENV;

  if (env !== "production") {
    return null;
  }

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
          <Script id="8a0ab85c1e" />
          <Script id="a9bf816709" />
        </>
      );

    case "firebase":
      return <Script id="232868bc4a" />;

    default:
      return (
        <>
          <Script id="da0d688ec8" />
          <Script id="3e3126f064" />
        </>
      );
  }
}

function Script({id}: {id: string}) {
  return <script
    async
    data-uid={id}
    src={`https://thoughtful-inventor-7842.ck.page/${id}/index.js`}
  />
}

export default ConvertKitPostSignup;
