export async function getContacts() {
    try {
        const response = await fetch(`/StudyHub/contacts/teacher.json`, { headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { teachers } = await response.json();
        return { "success": true, "data": teachers };
    } catch (error) {
        console.error(error);
        return ({ "success": false, "error": error });
    }
}