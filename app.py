from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from hotspot_model import calculate_hotspot_score


app = FastAPI(
    title="VayuNet AI",
    description="Hyperlocal pollution intelligence API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "project": "VayuNet AI",
        "status": "online"
    }


@app.get("/api/hotspots")
def get_hotspots():

    score = calculate_hotspot_score(
        pm25=218,
        pm10=301,
        citizen_reports=28,
        satellite_signal=0.82,
        smoke_detected=True,
        wind_speed=3.2
    )

    return {

        "location": "Meerut Corridor",

        "pm25": 218,

        "pm10": 301,

        "hotspot_probability": score,

        "risk": "CRITICAL",

        "predicted_pm25_6h": 258,

        "source": "Industrial emissions",

        "confidence": 0.89

    }