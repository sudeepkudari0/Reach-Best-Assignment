export type students = {
    student_id : string;
    student_name : string;
    g_crime : string;
    g_mystery : string;
    g_thriller : string;
    a_time : string;
    d_level: string;
}
export type studentsWithOutId = {
    student_name : string;
    g_crime : string;
    g_mystery : string;
    g_thriller : string;
    a_time : string;
    d_level: string;
}

export type books = {
    book_id : string;
    book_name : string;
    g_crime : number;
    g_mystery : number;
    g_thriller : number;
    a_time : number;
    d_level: number;
}

export type booksWithOutId = {
    book_name : string;
    g_crime : string;
    g_mystery : string;
    g_thriller : string;
    a_time : string;
    d_level: string;
}