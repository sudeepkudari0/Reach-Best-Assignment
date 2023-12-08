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
import React, { useEffect } from "react"
import axios from  "axios"
import { students} from '../../Types'

interface StudentSelectionProps {
  onStudentSelect: (bookId: string) => void;
}

const StudentAnalysis: React.FC<StudentSelectionProps> = ({ onStudentSelect }) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [ students, setStudents ] = React.useState<students[]>([])

    useEffect(() => {
      axios
        .get<students[]>(`http://localhost:3000/api/v1/students`)
        .then((res) => {
          const student = res.data;
          setStudents(student);
          console.log(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }, []);

  return (
    <div><Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] justify-between"
      >
        {value
  ? students.find((stud) => stud.student_name.toLowerCase() === value)?.student_name
  : "Students..."}
        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search stud..." className="h-9" />
        <CommandEmpty>No students found.</CommandEmpty>
        <CommandGroup>
          {students.map((stud) => (
            <CommandItem
            key={stud.student_id}
            value={stud.student_id}
            onSelect={(currentValue) => {
              setValue(currentValue === value ? "" : currentValue);
              setOpen(false);
              onStudentSelect(stud.student_id);
            }}
          >
              {stud.student_name}
              <CheckIcon
                className={cn(
                  "ml-auto h-4 w-4",
                  value === stud.student_id ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover></div>
  )
}

export default StudentAnalysis