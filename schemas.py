
from pydantic import BaseModel, Field, EmailStr
from typing import Optional


class User(BaseModel):
    name: str
    email: EmailStr
    password: str


class Item(BaseModel):
    item_name: str
    description: str
    date: str
    time: str
    location: str
    image_url: str
    contact_info: str
    type: str 
    priority: Optional[bool] = False
    is_claimed: Optional[bool] = False
    wants_call: Optional[bool] = False  
class Feedback(BaseModel):
    name: Optional[str] = "Anonymous"
    email: Optional[EmailStr] = None
    message: str
    date: Optional[str] = None  

