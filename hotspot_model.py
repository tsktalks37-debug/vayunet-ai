def calculate_hotspot_score(
    pm25,
    pm10,
    citizen_reports,
    satellite_signal,
    smoke_detected,
    wind_speed
):

    pm25_score = min(pm25 / 250, 1)

    pm10_score = min(pm10 / 350, 1)

    citizen_score = min(
        citizen_reports / 50,
        1
    )

    wind_score = 1 - min(
        wind_speed / 15,
        1
    )

    score = (

        0.35 * pm25_score +

        0.20 * pm10_score +

        0.15 * citizen_score +

        0.15 * satellite_signal +

        0.10 * float(smoke_detected) +

        0.05 * wind_score

    )

    return round(score * 100, 2)