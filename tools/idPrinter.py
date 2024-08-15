import re



# Function to read the content from a file
def read_file(filename):
        with open(filename, 'r') as file:
                return file.read()

# Load the string from a file
input_string = read_file('input.txt')

# Regular expression to find the substring between '>' and '.jpg<'
regex = r'div data-id="(.*?)".*?(IMG.*?.[jpeg|jpg]) U'

# Find all matches
matches = re.findall(regex, input_string)

# Print the found matches
for match in matches:
        # another working link - https://drive.google.com/thumbnail?id=${imageId}&sz=w${width}-h${height}
        print("https://lh3.googleusercontent.com/d/" + match[0])