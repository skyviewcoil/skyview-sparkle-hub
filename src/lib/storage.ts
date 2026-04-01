const STORAGE_BASE = "https://zedtzqtkoggtagjnpqpa.supabase.co/storage/v1/object/public";

export function storageUrl(bucket: string, file: string) {
  return `${STORAGE_BASE}/${bucket}/${encodeURIComponent(file)}`;
}

// Pre-built image URLs for pages
export const IMAGES = {
  // Glossy bucket - landscape
  glossyHero: storageUrl("glossy", "DSC1510-HDR-1024x683.jpg"),
  glossyLiving: storageUrl("glossy", "IMG_2918-HDR-1024x683.jpg"),
  glossyBathroom: storageUrl("glossy", "DSC9769-HDR-1024x768.jpg"),
  glossyKitchen: storageUrl("glossy", "IMG_3058-HDR-1024x683.jpg"),
  glossyDetail: storageUrl("glossy", "DSC1453-HDR-1024x683.jpg"),
  glossyWide: storageUrl("glossy", "DSC9880-HDR-1024x768.jpg"),
  glossyDark: storageUrl("glossy", "DSC9931-HDR-1024x768.jpg"),
  glossyRoom: storageUrl("glossy", "DSC0019-HDR-1024x768.jpg"),
  glossyHall: storageUrl("glossy", "DSC9694-HDR-1024x768.jpg"),
  glossyModern: storageUrl("glossy", "IMG_3328-HDR-1024x683.jpg"),
  glossyAngle: storageUrl("glossy", "DSC1471-HDR-1024x683.jpg"),
  glossyMirror: storageUrl("glossy", "DSC9796-HDR-1024x768.jpg"),
  glossyCorner: storageUrl("glossy", "IMG_3082-HDR-1024x683.jpg"),
  glossyLed: storageUrl("glossy", "DSC1348-HDR-1024x683.jpg"),

  // Matte bucket
  matte1: storageUrl("mate", "07-1-1024x683 (1).jpg"),
  matte2: storageUrl("mate", "07-1-1024x683 (2).jpg"),

  // Print bucket
  printSky: storageUrl("print", "DSC0031-HDR-1024x768.jpg"),
  printWine: storageUrl("print", "Illuminated_Stretch_Ceiling_Custom_Print_wine_grapes_commercial_hotel_1.jpg"),
  printWall: storageUrl("print", "Wall_Printed_Ceiling.jpg"),
  printDecor: storageUrl("print", "DSC0061-HDR-1024x768.jpg"),
  printFlower: storageUrl("print", "41707477_1164783980335351_4958388276915339264_n.jpg"),
  printCommercial: storageUrl("print", "FTS00377-scaled.jpg"),
} as const;
