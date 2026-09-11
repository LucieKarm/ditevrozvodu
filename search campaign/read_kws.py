import pandas as pd

df_kws = pd.read_excel("Search campaign antigravity.xlsx", sheet_name="CZ KWs")
print(df_kws.to_string())
