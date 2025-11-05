
import os
from pymongo import MongoClient
from dotenv import load_dotenv

-----
load_dotenv()  


MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv:"
)

try:
    client = MongoClient(MONGO_URI)
    db = client["lostlink_ai"]
    items_col = db["items"]        
    feedback_col = db["feedback"]  

    # Test connection
    client.admin.command('ping')
    print("✅ MongoDB connected successfully.")

except Exception as e:
    print(f"❌ MongoDB connection failed: {e}")
    raise e


TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE = os.getenv("TWILIO_PHONE")  

if not (TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN and TWILIO_PHONE):
    print("⚠️ Twilio credentials missing in .env")
else:
    print("✅ Twilio credentials loaded successfully")


GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("⚠️ Gemini API key missing in .env")
else:
    print("✅ Gemini API key loaded successfully")


def get_collection(name: str):
    """Return a MongoDB collection by name."""
    return db[name]

