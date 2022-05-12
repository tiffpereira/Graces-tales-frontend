import React, { useState, useEffect } from 'react'
import { GetBooks } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'
import '../styles/Books.css'

const Books = () => {
    let navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const handleBooks = async () => {
            const data = await GetBooks()
            setBooks(data)
        }
        handleBooks()
    }, [])

    return (
        <div>
            <div>
                <h1>BOOKS</h1>
            </div>
            <div>
                {books.map((book) => (
                    <div className='individual-book' key={book.id}>
                    <h3 onClick={() => navigate('/bookdetails')}>{book.title}</h3>
                    <img src={book.photo_url} alt='book cover' style={{height: 50, width: 50}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books