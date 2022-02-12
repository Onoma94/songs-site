import { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import GuestBookPost from "../components/guestBookPost";

function GuestBook()
{
    const [guestBook, setGuestBook] = useState([]);
    useEffect(() => {
        retrieveGuestBook();
    }, [])


    const retrieveGuestBook = () =>
    {
        SongsService.getGuestBook()
            .then(response => {
                setGuestBook(response.data);
                console.log(guestBook);
            })
    }

    return(
        <div className="site-section">
            This page will contain a guest book.<br /><br /><br />
            <div className="container">
            {
                guestBook.map(post =>
                (
                    <GuestBookPost {...post} />
                )
                )
            }
            </div>
        </div>
    )
}

export default GuestBook;