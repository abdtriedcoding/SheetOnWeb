import { google } from "googleapis";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { ToggleTheme } from "./components/toggle-theme";
import BarChart from "./components/bar-chart";

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
    range: "Sheet1!A2:M",
  });

  // Extract values from the response
  const excelData = response?.data?.values!;

  // Transform the excelData in to required data structure
  const data: EmployeeData[] = excelData?.slice(0, 50)?.map((row) => {
    return {
      eeid: row[0] || "",
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
    };
  });

  return (
    <>
      <div className="flex justify-between container pt-4">
        <div>
          <h1 className="text-xl font-semibold">Users</h1>
          <p className="mt-2 text-sm">
            A list of all users including their details.
          </p>
        </div>
        <ToggleTheme />
      </div>

      <DataTable columns={columns} data={data} />

      <BarChart data={data} />
    </>
  );
};

export default HomePage;
