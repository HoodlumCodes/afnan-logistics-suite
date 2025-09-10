const mockTrackingData: { [key: string]: TrackingStatus[] } = {
  "AFN22385": [
    { status: "Package Received", location: "Dubai, UAE", timestamp: "Sept 8, 2025 10:21", description: "Your package has been received at our Dubai facility", icon: Package, completed: true},
    { status: "In Transit", location: "Dubai → Grays, UK", timestamp: "Sept 8, 2025 14:03", description: "Package is on route to Grays via Clipper Courier Services", icon: Truck, completed: true},
    { status: "In Transit", location: "Dubai → Grays, UK", timestamp: "Sept 8, 2025 18:49", description: "Package is on route to Grays via Clipper Courier Services", icon: Truck, completed: true}
    { status: "In Transit", location: "Diyala, Iraq", timestamp: "Sept 10, 2025 02:55", description: "Package has reached Diyala, Iraq on its route to Grays via Clipper Courier Services", icon: Truck, completed: true}
    { status: "In Transit", location: "Ankara, Turkey", timestamp: "Sept 11, 2025 09:42", description: "Package is moving through central Turkey toward the EU corridor", icon: Truck, completed: true},
    { status: "Border Crossing", location: "Turkey–Bulgaria Border", timestamp: "Sept 12, 2025 16:15", description: "Package is at the Turkish–Bulgarian border awaiting customs clearance", icon: Truck, completed: true},
    { status: "In Transit", location: "Serbia / Hungary Corridor", timestamp: "Sept 13, 2025 11:30", description: "Package has entered Central Europe and is transiting toward Romania", icon: Truck, completed: true},
    { status: "Customs Hold", location: "Romania–Bulgaria Border", timestamp: "Sept 14, 2025 07:50", description: "Package is being held at the Romania–Bulgaria border for paperwork checks and customs clearance", icon: Truck, completed: false},
  ],
};