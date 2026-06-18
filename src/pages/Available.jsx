import "../styles/Available.css";
import ThinkAndGrowRich from "../assets/books/think-and-grow-rich.jpeg";
import atomicHabits from "../assets/books/atomic-habits.jpeg";
import Ikigai from "../assets/books/ikigai.jpeg";
import PragmaticProgrammer from "../assets/books/pragmatic-programmer.jpeg";
import richDadPoorDad from "../assets/books/rich-dad-poor-dad.jpeg";
function Available() {
    const books=[
        {
        id: 1,
        title: "Think And Grow Rich",
        author: "James Clear",
        Category: "Self Help",
        Status: "Available",
        image: ThinkAndGrowRich,

        },
        
      
{
  id: 2,
  title: "Rich Dad Poor Dad",
  author: "Napoleon Hill",
  Category: "Finance",
  Status: "Available",
  image: richDadPoorDad,
},

{
  id: 3,
  title: "Ikigai",
  author: "Morgan Housel",
  Category: "Finance",
  Status: "Available",
  image: Ikigai,
},
{
  id: 4,
  title: "Ikigai",
  author: "Hector Garcia",
  Category: "Self Help",
  Status: "Available",
  image: Ikigai,
},
{
  id: 5,
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  Category: "Programming",
  Status: "Available",
  image: PragmaticProgrammer,
},

    ];
    return(
        <main className="books-page">
        <div className="search">
         <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search Books.." className="input"/>
        </div>
        <table>
            <thead>
                <tr className="firstrow">
                    <th>#</th>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book)=>( 
                    <tr key={book.id} className="secondrow">
                        <td>{book.id}</td>
                        <td className="title-cell">
                           <div className="book-info">
                              <img
                                  src={book.image}
                                   alt={book.title}
                                   className="book-cover"
                                 />
                              <span>{book.title}</span>
                            </div>
                        </td>
                        <td>{book.author}</td>
                        <td>
                            <span className="category">{book.Category}</span>
                        </td>
                        <td>
                            <span >
                                {book.Status}
                            </span>
                        </td>
                        <td>
                        <button className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>

                    </tr>
                ))}
            </tbody>
        </table>
      
    </main>
    );
}
export default Available;