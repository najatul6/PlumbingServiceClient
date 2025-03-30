import { FaMapMarkerAlt, FaPhone, FaCarAlt, FaClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

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

  // Initialize Google Map
  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const portland = new window.google.maps.LatLng(45.5152, -122.6784);
    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: portland,
      zoom: 10,
      styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    // Draw service radius
    new window.google.maps.Circle({
      strokeColor: "#3498db",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#3498db",
      fillOpacity: 0.2,
      map: mapInstance,
      center: portland,
      radius: 40233.6 // 25 miles in meters
    });

    setMap(mapInstance);
  }, []);

  // Add/remove markers when expanded state changes
  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    const newMarkers = [];

    // Add primary markers (always visible)
    serviceAreas.primary.forEach(area => {
      const marker = new window.google.maps.Marker({
        position: { lat: area.lat, lng: area.lng },
        map,
        title: area.name,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });
      newMarkers.push(marker);
    });

    // Add secondary markers if expanded
    if (expanded) {
      serviceAreas.secondary.forEach(area => {
        const marker = new window.google.maps.Marker({
          position: { lat: area.lat, lng: area.lng },
          map,
          title: area.name,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }
        });
        newMarkers.push(marker);
      });
    }

    setMarkers(newMarkers);
  }, [expanded, map, serviceAreas.primary, serviceAreas.secondary, markers]);

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
          className="w-full h-96 rounded-lg overflow-hidden shadow-xl mb-8"
          style={{ minHeight: '400px' }}
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
                    map.panTo({ lat: area.lat, lng: area.lng });
                    map.setZoom(12);
                  }
                }}
                onMouseOut={() => {
                  if (map) {
                    map.panTo({ lat: 45.5152, lng: -122.6784 });
                    map.setZoom(10);
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
            {expanded ? 'Show Less Areas' : 'Show All Areas'}
            <svg 
              className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} 
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