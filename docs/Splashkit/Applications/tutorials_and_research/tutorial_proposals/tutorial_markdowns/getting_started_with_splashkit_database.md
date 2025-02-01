# Getting Started With SplashKit Database

## Introduction

### What is SplashKit Database?

SplashKit has a database library that allows you to create or load databases and perform queries on
them. These databases are stored in database files, and with functions from the SplashKit library,
we can query and manipulate the database.

### Usage

You may have learned the use of database, which is for storing information. On SplashKit, you may
want to use database to store information of different users who have access to the game, such as
levels, high score, or save files. You may also want to use databases when creating data heavy
games, e.g., to store information about all the different items, skills, weapons, etc. available in
game.

## Opening Database in SplashKit

### Database

Accessed databases are stored in the `Database` object.

### Open Database

`Open Database` is the function used to access or create a database file. If the filename used in
the parameter is an existing database, it will retrieve and access the file. Otherwise, it will
create a new database file with the provided filename.

Syntax in C++:

```
database open_database(string name, string filename)
```

### Has Database

`Has Database` is a boolean fuction used to check if the database with the given name has been
loaded into the program, and return either true or false accordingly.

Syntax in C++:

```
bool has_database(string name)
```

### Database Named

`Database Named` is a function that retrieves the database that has been opened with
`Open Database`. This is useful when you want to use the database without storing it into a
variable.

Syntax in C++:

```
database database_named(string name)
```

### Free Database

After you have finished using your database, you should free the resource using `Free Database`.
There are two versions of the function, one where you use the database object as the parameter, and
one where you use the name of the database for the parameter.

Syntax in C++:

```
void free_database(database db_to_close)
```

```
void free_database(string name_of_db_to_close)
```

### Free All Databases

Another way of freeing all databases at once is using the `Free All Databases` function.

Syntax in C++:

```
void free_all_databases()
```

### Demonstration

```
int main()
{
    // Open database named "test" from a file named "test_database"
    open_database("test", "test_database");

    // Check if database has been loaded
    if (has_database("test"))
    {
        // Store database to a variable x
        database x = database_named("test");
    }

    // Free the database since we are done
    free_all_databases();

    // Alternatives
    // free_database("test");
    // free_database(x);
}
```

## Performing a Query on the Database

### Query Result

`Query Result` is another important data type related to database. This is used to store the result
after performing a query on a database.

### Run Sql

`Run Sql` performs an sql command to the database and returns the result as a `Query Result`. Either
the database object or the string name can be used to pass the database on to the function.

Syntax in C++:

```
query_result run_sql(database db, string sql)
```

```
query_result run_sql(string database_name, string sql)
```

### Query Success

`Query Success` can be used to check if the most recent query on a `Query Result` was successful or
not. Syntax in C++:

```
bool query_success(query_result db_result)
```

### Query Column For Boolean

`Query Column For Boolean` is used to access a column of a `Query Result` which consists of booleans
at the current row (the top row).

Syntax in C++:

```
bool query_column_for_bool(query_result db_result, int col)
```

### Query Column For Double

`Query Column For Double` is similar to the previous function, except it is used when the data type
is double.

Syntax in C++:

```
double query_column_for_double(query_result db_result, int col)
```

### Query Column For Integer

Similar to the previous two functions, this has the same usage except it is for integers.

Syntax in C++:

```
int query_column_for_int(query_result db_result, int col)
```

### Query Column For String

The final query column function performs similarly to the other functions, where it is used for
strings.

Syntax in C++:

```
string query_column_for_string(query_result db_result, int col)
```

### Query Type Of Col

`Query Type Of Col` is used to check what the data type of the column is. This is useful when you
don't know what data types are used in the database.

Syntax in C++:

```
string query_type_of_col(query_result db_result, int col)
```

### Rows Changed

This function is used to check how many rows has been changed on a database the last time a changing
query was performed on the database.

Syntax in C++:

```
int rows_changed(database db)
```

### Free Query Result

Similar to a `Database`, we should free `Query Result` that we have finished using.

Syntax in C++:

```
void free_query_result(query_result query)
```

### Free All Query Results

`Free All Query Results` can be used to free all `Query Results` at once.

Syntax in C++:

```
void free_all_query_results()
```

### Demonstration

```
int main()
{
    // Open database named "users" with a table "Users" and the collumns "UID", "Name"
    open_database("users", "users_database");

    // Create a query result to store results
    query_result result;
    int uid;
    string name;

    // Perform SQL to add a new user
    run_sql("users", "INSERT INTO Users VALUES('001', 'John');");

    // Now, if rows_changed(database_named("users")); is used, it should return 1.

    // Perform SQL to get the whole table
    result = run_sql("users", "SELECT * FROM Users;");

    // Get the values into variables
    uid = query_column_for_integer(result, 0);
    name = query_column_for_string(result, 1);

    // Free the resources since we are done
    free_all_databases();
    free_all_query_results();
}
```

## Iterating Through a Database

You may have noticed that the `Query Column` functions only get the data from the first row of the
`Query Result`. This section will show you how to access the other rows, and iterating through the
whole table.

### Get Next Row

`Get Next Row` checks if there is a valid row and moves you to the next row of the `Query Result`.
It is a boolean function that will return either true or false depending on whether the next row
exists or not.

Syntax in C++:

```
bool get_next_row(query_result db_result)
```

### Has Row

Syntax in C++:

```
bool has_row(query_result db_result)
```

### Reset Query Result

Syntax in C++:

```
void reset_query_result(query_result db_result)
```

### Demonstration

Sample data of "test_database":

Table | ID | | ---- | | 0 | | 1 | | 2 |

```
int main()
{
    // Open a database from a file "test_database" which has a table "Table" with the collumn "ID"
    open_database("test", "test_database");

    query_result result = run_sql("test", "SELECT * From Table";);

    // Check if there is a valid row since the table may be empty
    if (has_row(result))
    {
        do
        {
            int id = query_column_for_integer(result, 0); // This will return the values 0, 1, and 2

        } while (get_next_row(result)) // Loop while there is a valid next row
    }

    free_all_databases();
    free_all_query_results();
}
```
