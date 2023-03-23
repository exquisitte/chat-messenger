from fastapi import FastAPI, APIRouter
from pydantic import BaseModel


app = FastAPI()
router = APIRouter()

class Model(BaseModel):
    id: int
    name: str

@app.get('/hello/')
async def main_page(id=0, name="hi"):
    return {id: name}