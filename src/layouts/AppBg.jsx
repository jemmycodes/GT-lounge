const AppBg = ({ children }) => {
  return (
    <main className="flex flex-col bg-bgBlack p-5">
      {children}
      <div aria-hidden className="splash-bg-blur absolute right-0"></div>
      <div aria-hidden className="splash-bg-blur absolute bottom-0"></div>
    </main>
  );
};

export default AppBg;
