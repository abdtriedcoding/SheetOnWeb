import { google } from "googleapis";

const HomePage = async () => {
  // Authenticate with Google Sheets API
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  // Create a Google Sheets API object
  const sheets = google.sheets({ version: "v4", auth });

  // Fetch data from the specified Google Sheet
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A2:N",
  });

  // Extract values from the response
  const posts = response?.data?.values;

  // Transform the data into an array of objects
  const transformedData = posts?.slice(0, 5)?.map((row) => {
    return {
      EEID: row[0] || "",
      fullName: row[1] || "",
      jobTitle: row[2] || "",
      department: row[3] || "",
      businessUnit: row[4] || "",
      gender: row[5] || "",
      ethnicity: row[6] || "",
      age: row[7] || "",
      hireDate: row[8] || "",
      annualSalary: row[9] || "",
      bonusPercentage: row[10] || "",
      country: row[11] || "",
      city: row[12] || "",
      exitDate: row[13] || "",
    };
  });

  console.log(transformedData);

  return (
    <>
      <div className="text-4xl text-center bg-yellow-300 p-4">
        Let's start building🔥
      </div>

      {/* Display raw data (temporary for debugging) */}
      {posts?.map((v: any, i: number) => (
        <li key={i}>
          <p>{v}</p>
        </li>
      ))}
    </>
  );
};

export default HomePage;
