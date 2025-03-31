import { FaMapMarkerAlt, FaPhone, FaCarAlt, FaClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ServiceAreas = () => {
  const [expanded, setExpanded] = useState(false);
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // Service area data
  const serviceAreas = {
    primary: [
      { name: "Portland", lat: 45.5152, lng: -122.6784 },
      { name: "Beaverton", lat: 45.4871, lng: -122.8037 },
      { name: "Hillsboro", lat: 45.5229, lng: -122.9898 },
      { name: "Gresham", lat: 45.5008, lng: -122.4315 },
      { name: "Vancouver", lat: 45.6387, lng: -122.6615 },
      { name: "Lake Oswego", lat: 45.4207, lng: -122.6706 },
      { name: "Tigard", lat: 45.4312, lng: -122.7715 },
      { name: "Wilsonville", lat: 45.306, lng: -122.7651 }
    ],
    secondary: [
      { name: "Tualatin", lat: 45.3849, lng: -122.7633 },
      { name: "Milwaukie", lat: 45.4462, lng: -122.6398 },
      { name: "Happy Valley", lat: 45.4465, lng: -122.5318 },
      { name: "Oregon City", lat: 45.3573, lng: -122.6068 },
      { name: "Clackamas", lat: 45.4076, lng: -122.5704 },
      { name: "Troutdale", lat: 45.5403, lng: -122.3878 },
      { name: "Fairview", lat: 45.5389, lng: -122.4338 },
      { name: "Wood Village", lat: 45.534, lng: -122.4209 },
      { name: "Camas", lat: 45.5871, lng: -122.3995 },
      { name: "Washougal", lat: 45.5826, lng: -122.3534 },
      { name: "Battle Ground", lat: 45.7809, lng: -122.5334 },
      { name: "Ridgefield", lat: 45.8157, lng: -122.6858 }
    ]
  };

  const coverageDetails = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500" size={20} />,
      title: "Service Radius",
      description: "25-mile radius from downtown Portland"
    },
    {
      icon: <FaCarAlt className="text-green-500" size={20} />,
      title: "Dispatch Time",
      description: "60-90 minutes for emergencies"
    },
    {
      icon: <FaClock className="text-yellow-500" size={20} />,
      title: "Availability",
      description: "24/7 service including holidays"
    }
  ];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapRef.current) return;

    const mapInstance = L.map(mapRef.current).setView([45.5152, -122.6784], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mapInstance);

    // Add service radius circle (25 miles ≈ 40,234 meters)
    L.circle([45.5152, -122.6784], {
      color: "#3498db",
      fillColor: "#3498db",
      fillOpacity: 0.2,
      radius: 40234
    }).addTo(mapInstance);

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  // Add/remove markers when expanded state changes
  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => marker.remove());
    const newMarkers = [];

    // Custom marker icons
    const blueIcon = L.icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const greenIcon = L.icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add primary markers (always visible)
    serviceAreas.primary.forEach(area => {
      const marker = L.marker([area.lat, area.lng], { 
        icon: blueIcon,
        title: area.name
      }).addTo(map)
        .bindPopup(`<b>${area.name}</b><br>Primary Service Area`);
      newMarkers.push(marker);
    });

    // Add secondary markers if expanded
    if (expanded) {
      serviceAreas.secondary.forEach(area => {
        const marker = L.marker([area.lat, area.lng], { 
          icon: greenIcon,
          title: area.name
        }).addTo(map)
          .bindPopup(`<b>${area.name}</b><br>Extended Service Area`);
        newMarkers.push(marker);
      });
    }

    setMarkers(newMarkers);
  }, [expanded, map]);

  return (
    <section className="py-16 bg-[#2c3e50] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Service Areas</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Proudly serving the greater Portland metro area
          </p>
        </div>

        {/* Coverage Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coverageDetails.map((detail, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                {detail.icon}
                <h3 className="text-xl font-semibold">{detail.title}</h3>
              </div>
              <p className="text-gray-300">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div 
          ref={mapRef} 
          className="w-full h-96 rounded-lg overflow-hidden shadow-xl mb-8 z-0"
          style={{ minHeight: "400px" }}
        />

        {/* Areas List */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Cities We Serve
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {(expanded ? [...serviceAreas.primary, ...serviceAreas.secondary] : serviceAreas.primary).map((area, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 p-4 rounded-lg text-center hover:bg-opacity-20 transition-colors cursor-default"
                onMouseOver={() => {
                  if (map) {
                    map.flyTo([area.lat, area.lng], 12);
                  }
                }}
                onMouseOut={() => {
                  if (map) {
                    map.flyTo([45.5152, -122.6784], 10);
                  }
                }}
              >
                {area.name}
              </div>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 bg-white text-[#2c3e50] hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {expanded ? "Show Less Areas" : "Show All Areas"}
            <svg 
              className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        {/* Not in Your Area? */}
        <div className="mt-12 bg-[#3498db] rounded-lg p-6 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-3">Not in Our Service Area?</h3>
          <p className="mb-4">
            We may still be able to help or recommend a trusted plumbing professional in your area.
          </p>
          <a 
            href="tel:5551234567" 
            className="inline-flex items-center gap-2 bg-white text-[#2c3e50] hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            <FaPhone /> Call Us: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;