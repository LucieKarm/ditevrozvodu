import pandas as pd

# Read the template
print("=== TEMPLATE SHEETS ===")
xl = pd.ExcelFile("Search campaign antigravity.xlsx")
print("Sheets:", xl.sheet_names)
print()

for sheet in xl.sheet_names:
    print(f"--- Sheet: {sheet} ---")
    df = pd.read_excel("Search campaign antigravity.xlsx", sheet_name=sheet, header=None)
    print(df.to_string())
    print()
