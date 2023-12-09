import React from 'react'
import { Button } from "../../@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog"
import { Input } from "../../@/components/ui/input"
import { Label } from "../../@/components/ui/label"
import { books, booksWithOutId } from '../../Types'
import axios from 'axios'

const AddBook  = () => {
  const [book_name, setBookName] = React.useState("")
  const [g_crime, setGCrime] = React.useState("")
  const [g_thriller, setGThriller] = React.useState("")
  const [g_mystery, setGMystery] = React.useState("")
  const [a_time, setATime] = React.useState("")
  const [d_level, setDLevel] = React.useState("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  };

  const handlegCrimechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGCrime(e.target.value);
  };
  
  const handlegMysteryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGMystery(e.target.value);
  };
  
  const handlegThrillerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGThriller(e.target.value);
  };
  const handleaTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setATime(e.target.value);
  };
  const handledLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDLevel(e.target.value);
  };
  const AddBook = () => {
  const newBook: booksWithOutId = {
    book_name: book_name,
    g_crime: g_crime,
    g_mystery: g_mystery,
    g_thriller: g_thriller,
    a_time: a_time,
    d_level: d_level
  }
  console.log(newBook);
  
  axios.post<books>(`http://${process.env.REACT_APP_BACKEND}:3000/api/v1/books`, newBook)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  
  window.location.reload();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="font-bold p-2 text-lg bg-black text-white border-none shadow-xl"
        >
          Add Book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
          <DialogDescription>
            <b>Enter Book Name and Rate from 1 - 3 <br />for all other fields (
            1 - low |
            2 - mid |
            3 - high)
            </b>          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={book_name}
              onChange={handleNameChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="crime" className="text-right">
              Crime
            </Label>
            <Input
              className="col-span-3"
              value={g_crime}
              maxLength={1}
              min={1}
              max={3}
              type="text"
              pattern='[1-3]'
              onChange={handlegCrimechange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mystery" className="text-right">
              Mystery
            </Label>
            <Input
              className="col-span-3"
              value={g_mystery}
              maxLength={1}
              min={1}
              max={3}
              type="text"
              pattern='[1-3]'
              onChange={handlegMysteryChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thriller" className="text-right">
              Thriller
            </Label>
            <Input
              className="col-span-3"
              value={g_thriller}
              maxLength={1}
              min={1}
              max={3}
              type="text"
              pattern='[1-3]'
              onChange={handlegThrillerChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thriller" className="text-right">
              Time
            </Label>
            <Input
              className="col-span-3"
              value={a_time}
              maxLength={1}
              min={1}
              max={3}
              type="text"
              pattern='[1-3]'
              onChange={handleaTimeChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thriller" className="text-right">
              Difficulty
            </Label>
            <Input
              className="col-span-3"
              value={d_level}
              maxLength={1}
              min={1}
              max={3}
              type="text"
              pattern='[1-3]'
              onChange={handledLevelChange}
              required
            />
          </div>
          <Button type="button" onClick={AddBook}>
            Save changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    )
}

export default AddBook