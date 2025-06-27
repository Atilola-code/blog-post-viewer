
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import PostList from "./component/PostList";

export default function Home() {
  return (
    <div>
       <main className="bg-gray-100 min-h-screen">
      <NavBar/>
      <PostList />
      <Footer/>
    </main>
    </div>
  );
}
