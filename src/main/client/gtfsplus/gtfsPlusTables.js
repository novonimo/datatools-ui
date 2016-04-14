export default [
  {
    id: 'realtime_routes',
    name: 'realtime_routes.txt',
    fields: [
      {
        name: 'route_id',
        required: true,
        inputType: 'GTFS_ROUTE',
        columnWidth: 4
      },
      {
        name: 'realtime_enabled',
        required: true,
        inputType: 'DROPDOWN',
        options: [
          { value: '0', text: 'Disabled' },
          { value: '1', text: 'Enabled' }
        ],
        columnWidth: 2
      },
      {
        name: 'realtime_routename',
        required: false,
        inputType: 'TEXT',
        columnWidth: 3
      },
      {
        name: 'realtime_routecode',
        required: false,
        inputType: 'TEXT',
        columnWidth: 3
      }
    ]
  },

  {
    id: 'realtime_stops',
    name: 'realtime_stops.txt',
    fields: [
      {
        name: 'trip_id',
        required: true,
        inputType: 'GTFS_TRIP',
        columnWidth: 5
      },
      {
        name: 'stop_id',
        required: true,
        inputType: 'GTFS_STOP',
        columnWidth: 5
      },
      {
        name: 'realtime_stop_id',
        required: true,
        inputType: 'TEXT',
        columnWidth: 2
      }
    ]
  },

  {
    id: 'directions',
    name: 'directions.txt',
    fields: [
      {
        name: 'route_id',
        required: true,
        inputType: 'GTFS_ROUTE',
        columnWidth: 6
      },
      {
        name: 'direction_id',
        required: true,
        inputType: 'DROPDOWN',
        options: [
          { value: '0' },
          { value: '1' }
        ],
        columnWidth: 3
      },
      {
        name: 'Direction',
        required: true,
        inputType: 'DROPDOWN',
        options: [
          { value: 'North' },
          { value: 'South' },
          { value: 'East' },
          { value: 'West' },
          { value: 'Northeast' },
          { value: 'Northwest' },
          { value: 'Southeast' },
          { value: 'Southwest' },
          { value: 'Clockwise' },
          { value: 'Counterclockwise' },
          { value: 'Inbound' },
          { value: 'Outbound' },
          { value: 'Loop' },
          { value: 'A Loop' },
          { value: 'B Loop' }
        ],
        columnWidth: 3
      }
    ]
  },

  {
    id: 'realtime_trips',
    name: 'realtime_trips.txt',
    fields: [
      {
        name: 'trip_id',
        required: true,
        inputType: 'GTFS_TRIP',
        columnWidth: 6
      },
      {
        name: 'realtime_trip_id',
        required: true,
        inputType: 'TEXT',
        maxLength: 15,
        columnWidth: 6
      }
    ]
  },

  {
    id: 'stop_attributes',
    name: 'stop_attributes.txt',
    fields: [
      {
        name: 'stop_id',
        required: true,
        inputType: 'GTFS_STOP',
        columnWidth: 4
      },
      {
        name: 'accessibility_id',
        required: false,
        inputType: 'DROPDOWN',
        options: [
          { value: '0', text: 'Unknown' },
          { value: '1', text: 'No ADA' },
          { value: '2', text: 'Full ADA' },
          { value: '3', text: 'Wheel Chair' },
          { value: '4', text: 'Blind' },
          { value: '5', text: 'Deaf' },
          { value: '6', text: 'Blind/Wheel Chair' },
          { value: '7', text: 'Deaf/Blind' },
          { value: '8', text: 'Deaf/Wheel Chair' }
        ],
        columnWidth: 2
      },
      {
        name: 'cardinal_direction',
        required: false,
        inputType: 'DROPDOWN',
        options: [
          { value: 'NO', text: 'North' },
          { value: 'SO', text: 'South' },
          { value: 'EA', text: 'East' },
          { value: 'WE', text: 'West' },
          { value: 'NE', text: 'Northeast' },
          { value: 'NW', text: 'Northwest' },
          { value: 'SE', text: 'Southeast' },
          { value: 'SW', text: 'Southwest' }
        ],
        columnWidth: 2
      },
      {
        name: 'relative_position',
        required: false,
        inputType: 'DROPDOWN',
        options: [
          { value: 'NS', text: 'Near side of intersection' },
          { value: 'FS', text: 'Far side of intersection' },
          { value: 'AT', text: 'Stop is at position' },
          { value: 'OP', text: 'Stop is across street' }
        ],
        columnWidth: 2
      },
      {
        name: 'stop_city',
        required: true,
        inputType: 'TEXT',
        maxLength: 60,
        columnWidth: 2
      }
    ]
  },

  {
    id: 'timepoints',
    name: 'timepoints.txt',
    fields: [
      {
        name: 'trip_id',
        required: true,
        inputType: 'GTFS_TRIP',
        columnWidth: 6
      },
      {
        name: 'stop_id',
        required: true,
        inputType: 'GTFS_STOP',
        columnWidth: 6
      }
    ]
  },

  {
    id: 'rider_categories',
    name: 'rider_categories.txt',
    fields: [
      {
        name: 'rider_category_id',
        required: true,
        inputType: 'DROPDOWN',
        options: [
          { value: '2', text: 'Senior' },
          { value: '3', text: 'Child' },
          { value: '4', text: 'Student' },
          { value: '5', text: 'Youth' },
          { value: '6', text: 'Disabled' },
          { value: '7', text: 'Promotional category' },
          { value: '11', text: 'Military' },
          { value: '15', text: 'Custom (15)' },
          { value: '16', text: 'Custom (16)' },
          { value: '17', text: 'Custom (17)' },
          { value: '18', text: 'Custom (18)' },
          { value: '19', text: 'Custom (19)' },
          { value: '20', text: 'Custom (20)' },
          { value: '21', text: 'Custom (21)' },
          { value: '22', text: 'Custom (22)' },
          { value: '23', text: 'Custom (23)' },
          { value: '24', text: 'Custom (24)' },
          { value: '25', text: 'Custom (25)' }
        ],
        columnWidth: 6
      },
      {
        name: 'rider_category_description',
        required: true,
        inputType: 'TEXT',
        maxLength: 256,
        columnWidth: 6
      }
    ]
  },

  {
    id: 'fare_rider_categories',
    name: 'fare_rider_categories.txt',
    fields: [
      {
        name: 'fare_id',
        required: true,
        inputType: 'GTFS_FARE',
        columnWidth: 6
      },
      {
        name: 'rider_category_id',
        required: true,
        inputType: 'DROPDOWN',
        options: [
          { value: '2', text: 'Senior' },
          { value: '3', text: 'Child' },
          { value: '4', text: 'Student' },
          { value: '5', text: 'Youth' },
          { value: '6', text: 'Disabled' },
          { value: '7', text: 'Promotional category' },
          { value: '11', text: 'Military' },
          { value: '15', text: 'Custom (15)' },
          { value: '16', text: 'Custom (16)' },
          { value: '17', text: 'Custom (17)' },
          { value: '18', text: 'Custom (18)' },
          { value: '19', text: 'Custom (19)' },
          { value: '20', text: 'Custom (20)' },
          { value: '21', text: 'Custom (21)' },
          { value: '22', text: 'Custom (22)' },
          { value: '23', text: 'Custom (23)' },
          { value: '24', text: 'Custom (24)' },
          { value: '25', text: 'Custom (25)' }
        ],
        columnWidth: 3
      },
      {
        name: 'price',
        required: true,
        inputType: 'TEXT',
        maxLength: 8,
        columnWidth: 3
      }
    ]
  },

  {
    id: 'calendar_attributes',
    name: 'calendar_attributes.txt',
    fields: [
      {
        name: 'service_id',
        required: true,
        inputType: 'GTFS_SERVICE'
      },
      {
        name: 'service_description',
        required: true,
        inputType: 'TEXT',
        maxLength: 30
      }
    ]
  },

  {
    id: 'farezone_attributes',
    name: 'farezone_attributes.txt',
    fields: [
      {
        name: 'zone_id',
        required: true,
        inputType: 'GTFS_ZONE'
      },
      {
        name: 'zone_name',
        required: true,
        inputType: 'TEXT',
        maxLength: 35
      }
    ]
  }
]