import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "../../@/lib/utils"
import { Button } from "../../@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover"
import axios from "axios"
import { books } from '../../Types'
import React, { useEffect } from "react"

interface BooksSelectionProps {
  onBookSelect: (bookId: string) => void;
}

const BooksSelection: React.FC<BooksSelectionProps> = ({ onBookSelect }) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [books, setBooks] = React.useState<books[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/books')
      .then((res) => {
        const book = res.data;
        setBooks(book);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [])

  return (
    <>
      <div>
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? books.find((book) => book.book_name.toLowerCase() === value)?.book_name
              : "Books..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search stud..." className="h-9" />
            <CommandEmpty>No stud found.</CommandEmpty>
            <CommandGroup>
              {books.map((book) => (
                <CommandItem
                  key={book.book_id}
                  value={book.book_id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    onBookSelect(book.book_id);
                  }}
                >
                  {book.book_name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === book.book_name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      </div>
      </>
      )
}
export default BooksSelection