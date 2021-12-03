const ConvertKitPostSignup: React.FC<{
  collection: string
}> = ({ collection }) => {
  const env = process.env.NODE_ENV;

  if (env !== "production") return null;

  return getScriptByCollection(collection);
};

function getScriptByCollection(collection: string) {
  switch (collection.toLowerCase()) {
    case 'react':
    case 'next':
      return <script async data-uid="a9bf816709" src="https://thoughtful-inventor-7842.ck.page/a9bf816709/index.js"></script>;

    case 'firebase':
      return (
        <script async data-uid="232868bc4a" src="https://thoughtful-inventor-7842.ck.page/232868bc4a/index.js"></script>
      );

    default:
      return  (
        <script
          async
          data-uid="3e3126f064"
          src="https://thoughtful-inventor-7842.ck.page/3e3126f064/index.js"
        ></script>
      );
  }
}

export default ConvertKitPostSignup;
