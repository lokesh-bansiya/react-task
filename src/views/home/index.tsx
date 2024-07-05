import Sidebar from "@/components/common";

const HomeView = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <p>This is the home page content.</p>
      </main>
    </div>
  );
};
export default HomeView;
