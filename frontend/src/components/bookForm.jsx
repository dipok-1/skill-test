import { useState } from "react"
import { addBookApi } from "../api/bookApi";
export function BookForm() {
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [ISBN, setISBN] = useState("");
    const [category, setCategory] = useState("");
    const [publicationYear, setPublicationYear] = useState("");

    function clearform() {
        setAuthorName("");
        setCategory("");
        setISBN("")
        setPublicationYear("");
        setTitle("")
    }


    const handleApiCall = async (e) => {
        e.preventDefault();
        try {
            const data = await addBookApi({ title, authorName, ISBN, category, publicationYear });
            clearform();
            alert("successfully submitted");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Title" value ={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Author Name" value ={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
            <input type="text" placeholder="ISBN" value ={ISBN} onChange={(e) => setISBN(e.target.value)}/>
            <input type="text" placeholder="Category" value ={category} onChange={(e) => setCategory(e.target.value)}/>
            <input type="number" placeholder="Publication Year" value ={publicationYear} onChange={(e) => setPublicationYear(e.target.value)}/>
            <button type="submit" onClick={handleApiCall}>Add Book</button>
        </form>
    )
}