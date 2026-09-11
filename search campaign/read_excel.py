import pandas as pd
import sys

def read_excel(file_path, sheet_name=None):
    print(f"--- Reading {file_path} ---")
    try:
        if sheet_name:
            df = pd.read_excel(file_path, sheet_name=sheet_name)
        else:
            df = pd.read_excel(file_path, sheet_name=None)
            for sheet, data in df.items():
                print(f"Sheet: {sheet}")
                print(data.head(10).to_string())
                print()
            return
        
        print(df.head(20).to_string())
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        
if __name__ == "__main__":
    read_excel("Search kampaně - příklad.xlsx")
    read_excel("ditevrozvodu.cz _ Podklady k search kampaním.xlsx", sheet_name="CZ KWs")
    read_excel("ditevrozvodu.cz _ Podklady k search kampaním.xlsx", sheet_name="CZ reklamy")
