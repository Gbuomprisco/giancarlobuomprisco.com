const DraftBadge = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <span className="py-2 px-4 bg-yellow-200 rounded-md font-semibold">
      {children}
    </span>
  );
};

export default DraftBadge;
