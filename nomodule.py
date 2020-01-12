file_data = []
with open("./lib/js-tables.js", "r") as esm_file:
    file_data = esm_file.read().split("\n");

new_file_data = []

for line in file_data:
    if line.startswith("module.exports"):
        new_file_data.append("//" + line + "\n")
    else:
        new_file_data.append(line + "\n")

with open("./lib/js-tables.nomod.js", "w") as new_file:
    new_file.writelines(new_file_data)

print("Built fallback!")