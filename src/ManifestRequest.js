export default class ManifestRequest {
    static async fetchDailyMessage() {
      try {
        const response = await fetch('https://zenquotes.io/api/today');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
  
        const data = await response.json();
        if (data && data[0] && data[0].q) {
          return data[0].q; // Alıntıyı döndür
        } else {
          return "No message available today."; // Yedek mesaj
        }
      } catch (error) {
        console.error('API Error:', error); // Hata detaylarını konsola yazdır
        return `Error: ${error.message}`; // Hata mesajını döndür
      }
    }
  }
  