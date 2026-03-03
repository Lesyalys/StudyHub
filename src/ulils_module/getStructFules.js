export async function getStructFules() {
    try {
        const response = await fetch(`/StudyHub/materials/mapMayerials.json`, { headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { datasYears } = await response.json();
        return { "success": true, "data": datasYears };
    } catch (error) {
        console.error(error);
        return ({ "success": false, "error": error });
    }
}