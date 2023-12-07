import React from 'react'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "../@/lib/utils"
import { Button } from "../@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../@/components/ui/popover"
import StudentsAnalysis from './Students/StudentsSelection'
import BooksSelection from './Books/BooksSelection'
const Analysis = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[calc(100vh-64px)]'>
      <div className='flex flex-col justify-center items-center'>
        <form action="">
        <div className='flex relative flex-row h-[100px] gap-10 bottom-[300px]'>
          <div>
          <StudentsAnalysis />
          </div>
          <div>
          <BooksSelection />
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Analysis