file_data = []
with open("./lib/json-tables.js", "r") as esm_file:
    file_data = esm_file.read().split("\n");

new_file_data = []

for line in file_data:
    if line.startswith("export") == False:
        new_file_data.append(line + "\n");

with open("./lib/json-tables.es5.js", "w") as new_file:
    new_file.writelines(new_file_data)

print("Built fallback!")