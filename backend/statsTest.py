import sys
sys.path.insert(0, './stats.py')
from stats import *


# transcription = getTranscription("gs://talko/a.wav")
# print(transcription)

# audioValues = getAudioValues("../audio-files/c.wav")
# print(audioValues)


userInput = """Hello! My name is Andrea sasir, I am studying marketing at the University of Texas at Dallas.
        I am a member of American Marketing Association and Alpha Kappa PSI both of which are dedicated to 
        shaping future Business Leaders. I hope to incorporate my business knowledge into consumer trend analysis
        and strengthening relationships among consumers as well as other companies. I am savvy, social, and 
        principles, and have exquisite interpersonal communciation skills. I know that I can be an asset in any
        company and or situation and I hope that you will consider me for an internship or job
        opportunities! Thank you so much!"""

stats = getStats(userInput,"a","../audio-files")
print(stats)

# accuracy = getAccuracy(userInput,getTranscription("gs://talko/a.wav"))
# print(accuracy)