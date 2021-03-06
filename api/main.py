from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Router import router
#para iniciar: python -m uvicorn main:app --reload
app = FastAPI(openapi_url='/api/openapi.json', docs_url='/api/docs')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.include_router(router, prefix='/api')