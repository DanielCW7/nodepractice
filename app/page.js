import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
          
        </a>
        <a href='/test'> test page </a>
        <br/> 



      </div>
      <div>
          <h2> SQL basics </h2>
          <p>To build a website that shows data from a database, you will need:</p>
          <ul>
            <li>A relational database management program (i.e. SQL Server, MySQL, PostgreSQL, etc.)</li>
            <li>To use a szerver-side scripting langauge like PHP, ASP, or NODE</li>
            <li>To use SQL to retrieve the data you want</li>
            <li>Using HTML/CSS to style the front end</li>
          </ul>
          <br/>

          <p>Data in RDBMS (relational database management system)
          The data stored in RDBMS is stored in database objects called "tables", which is a collection of related data entries and
          it consits of columns and rows.</p>
          <code>SELECT * FROM Example;</code>
          <p>selects everything from the "Example" table.</p>
          <p>Every entry is broken up into "fields".</p>
          <p>A record, or "row", is each individual entry.</p>   

          <br/>
          <h2> SQL statements </h2>  
          <p>SQL statements consists of keywords that are easy to understand.</p>  
          <p>This statement returns all records from a table named "Example".</p>
          <code>SELECT * FROM Example;</code>

          <br/>
          <h2> Database tables </h2>  
          <p>Databases often contain one or more tables and contains rows of data.</p>  
          <p>Also, SQL keywords a not case sensitive, so "select" is the same as "SELECT".</p>
          <p>As a rule, using a semi-colon to end SQL statements is preferred, as some database systems require it.</p>

          <br/>
          <h2> Important SQL commands </h2>  
          <ul>
            <li><code>SELECT</code> - extracts data from a database </li>
            <li><code>UPDATE</code> - updates data from a database </li>
            <li><code>DELETE</code> - deletes data from a database </li>
            <li><code>INSERT INTO</code> - inserts new data into a database </li>
            <li><code>CREATE DATABASE</code> - creates a new database </li>
            <li><code>ALTER DATABASE</code> - modifies a database </li>
            <li><code>CREATE TABLE</code> - creates a new table </li>
            <li><code>ALTER TABLE</code> - modifies a table </li>
            <li><code>DROP TABLE</code> - deletes a table </li>
            <li><code>CREATE INDEX</code> - creates an index (search key) </li>
            <li><code>DROP INDEX</code> - deletes an index </li>
          </ul>

          <br/>
          <h2> SQL SELECT statement </h2>  
          <p> the SELECT statement selects data from a database</p> 
          <code> SELECT User, City FROM Example;</code> 
          <p> Selects column1, column2, ... from the Example table </p>

          <br/>
          <h2> SQL SELECT all columns </h2>  
          <code> SELECT * FROM Example;</code> 

          <br/>
          <h2> SQL SELECT DISTINCT statement </h2>  
          <p> Selects all the different users from the "Example" table</p> 
          <p> Sometimes a column contains many duplicate values; and sometimes you'll only want to 
          list different (distinct) values.</p> 
          <code> SELECT DISTINCT User FROM Example;</code> 
          <p> Omitting the DISTINCT value from the SQL statement returns the value from all records of the table.</p>
          <code> SELECT DISTINCT User FROM Example;</code> 

          <br/>
          <h2> COUNT DISTINCT </h2>  
          <p> By using the DISTINCT keyword in a function called COUNT, we can return the number of different users.</p> 
          <code> SELECT COUNT(DISTINCT Users) FROM Example; </code> 

          <br/>
          <h2> SQL WHERE clause </h2>  
          <p> SQL WHERE is used to filter rows.</p> 
          <p> It is used to extract only the matching conditions. </p> 
          <code> SELECT * FROM Example WHERE User='John'; </code> 
          <p>Syntax</p>
          <code> SELECT <i>column 1, column 2, ... </i> FROM <i> table_name </i> WHERE <i>condition</i>;</code>
        
          <br/>
          <h2> Text fields vs. Numeric fields </h2>  
          <p> SQL requires single quotes around text values (most database systems will allow double quotes).
            However, numeric fields should not be enclosed in quotes. </p>
          <code> SELECT * FROM Example WHERE UserId=1; </code> 

          <br/>
          <h2> Operators in the WHERE clause </h2>  
          <p> SQL requires single quotes around text values (most database systems will allow double quotes).
            However, numeric fields should not be enclosed in quotes. </p>
          <code> SELECT * FROM Example WHERE UserId {'>'} 30; </code> 

          <br/>
          <h2> Operators </h2>  
          <ul>
            <li><code>=</code> Equal </li>
            <li><code>{'>'}</code> Greater than </li>
            <li><code>{'<'}</code> Less than </li>
            <li><code>{'>='}</code> Greater than or equal to </li>
            <li><code>{'<='}</code> Less than or equal to </li>
            <li><code>{'<>'}</code> Not equal to, in some versions of SQL can be written as <code>!=</code> </li>
            <li><code>{'>'}</code> Creates a new table </li>
            <li><code>BETWEEN</code> Between a certain range </li>
            <li><code>LIKE</code> Search for a pattern </li>
            <li><code>IN</code> To specify multiple possible values for a column </li>
          </ul>

          <br/>
          <h2> SQL ORDER BY </h2>  
          <p> The ORDER BY keyword in ascending or descending order. </p>
          <code> SELECT * FROM Example ORDER BY UserId; </code> 
          <p>Syntax</p>
          <code> SELECT <i>column 1, column 2, ... </i> FROM <i> table_name </i> ORDER BY <i>column 1, column 2, ... </i>ASC|DESC;</code>
          <p>To sort records in descending order, use DESC</p>
          <code> SELECT * FROM Products ORDER BY Price DESC</code>








        </div>
    </main>
  )
}
