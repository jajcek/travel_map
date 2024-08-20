# Define the URL to be replaced
url_to_replace = 'sftp://jacektopvr@ftp.cluster011.hosting.ovh.net/home/jacektopvr/www/gallery/'

# Function to process each line
def process_line(line):
    # Replace the URL with '"'
    replaced_line = line.replace(url_to_replace, '"')
    # Add '",' at the end and remove newline character before adding
    final_line = replaced_line.rstrip('\n') + '",'
    return final_line

# Read all lines from the file and process each line
def process_file(input_filename):
    with open(input_filename, 'r') as file:
        lines = file.readlines()

    processed_lines = [process_line(line) for line in lines]

    # Print the processed lines to the console
    for processed_line in processed_lines:
        print(processed_line)

# Example usage:
input_filename = 'input.txt'  # Replace with your input file name

process_file(input_filename)