const buildings = [
  [
    {
      category: ["building"],
      long_wgs84: -71.1046169,
      name: "Building W92",
      lat_wgs84: 42.35492043,
      id: "object-W92",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W92.jpg",
      street: "304 Vassar Street",
      bldgnum: "W92",
      floorplans: ["0", "1", "2"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://ist.mit.edu/",
          name: "Information Systems & Technology (IS&T)",
          altname: ["IS&T"],
        },
        { name: "Emergency Management" },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (W92-238)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09353578,
      name: "Building W11",
      lat_wgs84: 42.35826109,
      id: "object-W11",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W11.jpg",
      street: "40 Massachusetts Avenue",
      bldgnum: "W11",
      altname: ["Religious Activities Center"],
      architect: "Perry Shaw Hepburn",
      floorplans: ["0", "1", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://web.mit.edu/hillel/www/hillel-kosher-kitchen.html",
          category: ["food"],
          name: "Kosher Shabbat Dinner",
        },
        {
          url: "http://web.mit.edu/hillel/www/kosher-dining.html",
          name: "Kosher Dining",
          altname: ["Dining, Kosher"],
        },
        {
          url: "http://web.mit.edu/dsl/religious_life.html",
          name: "Chaplains, MIT Board of",
          altname: ["Religious Life"],
        },
        {
          url: "http://web.mit.edu/campus-activities/www/html/rac.html",
          name: "Religious Activities Center",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      website: "https://mitnano.mit.edu/",
      long_wgs84: -71.09146227,
      name: "MIT.nano",
      lat_wgs84: 42.36026053,
      street: "60 Vassar Street",
      bldgnum: "12",
      mailing: "77 Massachusetts Avenue",
      id: "object-12",
      contents: [{ url: "https://mitnano.mit.edu/", name: "MIT.nano" }],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09545096,
      name: "High Voltage Research Lab",
      lat_wgs84: 42.3608633,
      id: "object-N10",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-N10.jpg",
      street: "155 Massachusetts Avenue",
      bldgnum: "N10",
      architect: "Carleton Richmond Jr.",
      floorplans: ["0", "1", "2", "2M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09018269,
      name: "The Simons Building",
      lat_wgs84: 42.35881273,
      id: "object-2",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-2.jpg",
      street: "182 Memorial Drive",
      bldgnum: "2",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "2", "3", "4", "5", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        { url: "http://www-math.mit.edu/", name: "Mathematics, Dept. of" },
        { name: "Alberto P. Calderon Classroom (2-190)" },
        { name: "Norbert Wiener Common Room (2-290)" },
        { name: "Edmund F.A. Kelly (PhD 1970) Seminar Room (2-261)" },
        { name: "Leighton Seminar Room (2-449)" },
        {
          name: "David L. desJardins (1983) Graduate Student Pavilion (2-490)",
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09324745,
      name: "McNair Building",
      lat_wgs84: 42.36068424,
      id: "object-37",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-37.jpg",
      street: "70 Vassar Street",
      bldgnum: "37",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "0M", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northeast corner",
      contents: [
        {
          url: "http://web.mit.edu/astrophysics/",
          name: "Astrophysics Division",
        },
        {
          url: "http://raphael.mit.edu/",
          name: "Aerospace Computational Design Lab (ACDL)",
          altname: ["Fluid Dynamics Research Laboratory"],
        },
        { url: "http://mvl.mit.edu/", name: "Man Vehicle Laboratory" },
        { url: "http://snl.mit.edu/", name: "Space Nanotechnology Laboratory" },
        {
          url: "http://space.mit.edu/",
          name: "Kavli Institute for Astrophysics and Space Research",
        },
        { url: "http://web.mit.edu/ssl/", name: "Space Systems Laboratory" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09374587,
      name: "Guggenheim Laboratory",
      lat_wgs84: 42.36017838,
      id: "object-33",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-33.jpg",
      street: "125 Massachusetts Avenue",
      bldgnum: "33",
      architect: "Coolidge & Carlson",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        {
          url: "http://web.mit.edu/aeroastro/",
          name: "Aeronautics and Astronautics, Dept. of",
        },
        {
          url: "http://web.mit.edu/airlines/",
          name: "Global Airline Industry Program",
        },
        {
          url: "http://web.mit.edu/aeroastro/www/labs/ICAT/",
          name: "International Center for Air Transportation (ICAT)",
        },
        {
          url: "http://web.mit.edu/telams/",
          name:
            "Technology Laboratory for Advanced Materials and Structures (TELAMS)",
        },
        {
          url: "http://web.mit.edu/aeroastro/labs/cnrg/",
          name: "Communications and Networking Research Group",
        },
        {
          url: "http://lae.mit.edu/",
          name: "Laboratory for Aviation and the Environment",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09292347,
      name: "Pratt School",
      lat_wgs84: 42.35870876,
      id: "object-5",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-5.jpg",
      street: "55 Massachusetts Avenue",
      bldgnum: "5",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "1M", "2", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        {
          url:
            "http://acoustics.mit.edu/faculty/henrik/LAMSS/laboratory_for_autonomous_marine_sensing_systems.html",
          name: "Autonomous Marine Sensing Systems, Laboratory for",
        },
        {
          url:
            "http://acoustics.mit.edu/faculty/makris/Laboratory_for_Undersea_Remote_Sensing.html",
          name: "Undersea Remote Sensing, MIT Laboratory for",
        },
        {
          url: "http://web.mit.edu/bt/www/",
          name: "Building Technology Program",
        },
        {
          url: "http://web.mit.edu/icl/",
          name: "Impact and Crashworthiness Laboratory",
        },
        {
          url: "http://deslab.mit.edu/",
          name: "Ocean Engineering Design Laboratory",
        },
        {
          url: "http://fablab.mit.edu/",
          name: "Ocean Engineering Fabrication Laboratory",
        },
        { url: "http://oe.mit.edu/", name: "Ocean Engineering, Center for" },
        {
          url: "http://oe.mit.edu/flowlab/",
          name: "Ship and Platform Flows, Laboratory for",
        },
        {
          url: "http://web.mit.edu/solidmech/www/",
          name: "Solid Mechanics & Materials Laboratory",
        },
        {
          url: "http://studentlife.mit.edu/s3",
          name: "Student Support Services (S3)",
          altname: ["Help, Emotional Support"],
        },
        {
          url: "http://web.mit.edu/registrar/",
          name: "Registrar's Office",
          altname: ["Registration"],
        },
        {
          url: "http://web.mit.edu/registrar/classrooms/index.html",
          name: "Classroom Management and Scheduling (5-115)",
          altname: ["Schedules Office"],
        },
        {
          url: "http://web.mit.edu/registrar/records/index.html",
          name: "Transcripts & Academic Records (5-117)",
        },
        {
          url: "http://web.mit.edu/museum/exhibitions/hart.html",
          name: "Hart Nautical Gallery",
        },
        { url: "http://oe.mit.edu/", name: "Center for Ocean Engineering" },
        {
          url: "http://web.mit.edu/facultysupport/",
          name: "Faculty Support, Office of",
        },
        {
          url: "http://web.mit.edu/policies/sip/",
          name: "Student Information Policy",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.10475511,
      name: "Building NW98",
      lat_wgs84: 42.35959349,
      street: "12 Emily Street",
      bldgnum: "NW98",
      mailing: "77 Massachusetts Avenue",
      id: "object-NW98",
      contents: [
        {
          url: "http://web.mit.edu/seagrant/",
          name: "Sea Grant College Program",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08694971,
      name: "Whitaker College",
      lat_wgs84: 42.36166876,
      id: "object-E25",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E25.jpg",
      street: "45 Carleton Street",
      bldgnum: "E25",
      architect: "Mitchell Giurgola Gruzen Partners",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        {
          url: "http://web.mit.edu/committees/couhes/",
          name:
            "Humans as Experimental Subjects (COUHES), Committee on the Use of",
        },
        {
          url: "http://hst.mit.edu/",
          name: "Harvard-MIT Health Sciences and Technology (HST)",
          altname: ["Health Sciences and Technology Program (HST)"],
        },
        {
          url: "http://hst.mit.edu/",
          name: "Whitaker College of Health Sciences and Technology (HST)",
          altname: ["Health Sciences and Technology Program (HST)"],
        },
        { url: "http://crc.mit.edu/", name: "Clinical Research Center (CRC)" },
        {
          url: "http://imes.mit.edu/",
          name: "Institute for Medical Engineering & Science (IMES)",
          altname: ["IMES"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09247074,
      name: "Cyclotron",
      lat_wgs84: 42.36160679,
      id: "object-44",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-44.jpg",
      street: "51 Vassar Street",
      bldgnum: "44",
      architect: "Mccreery &Theriault",
      floorplans: ["0", "1", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
      contents: [
        {
          url: "http://edgerton.mit.edu/student-shops/edgerton-student-shop",
          name: "Edgerton Student Shop",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09306201,
      name: "Sloan Laboratories",
      lat_wgs84: 42.36037362,
      id: "object-31",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-31.jpg",
      street: "70 Vassar Street (Rear)",
      bldgnum: "31",
      architect: "Coolidge & Carlson",
      floorplans: ["00", "0", "0M", "1", "1M", "2", "3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east",
      contents: [
        {
          url: "http://web.mit.edu/c21ce/",
          name: "Center for 21st-Century Energy",
        },
        {
          url: "http://web.mit.edu/eel/",
          name: "Electrochemical Energy Laboratory",
        },
        {
          url: "http://web.mit.edu/aeroastro/www/partner/",
          name:
            "Partnership for AiR Transportation Noise and Emissions Reduction",
        },
        {
          url: "http://web.mit.edu/aeroastro/www/labs/GTL/",
          name: "Gas Turbine Laboratory",
        },
        {
          url: "http://web.mit.edu/sloan-auto-lab/",
          name: "Sloan Automotive Laboratory",
        },
        { url: "http://acl.mit.edu/", name: "Aerospace Controls Laboratory" },
        {
          url: "http://aeroastro.mit.edu/research-labs#anchor-nid-5882",
          name: "Interactive Robotics Lab",
        },
        {
          url: "http://aeroastro.mit.edu/research-labs#anchor-nid-6540",
          name: "SPARK Lab",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09056854,
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      lat_wgs84: 42.36159672,
      id: "object-32",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-32.jpg",
      street: "32 Vassar Street",
      bldgnum: "32",
      altname: ["Stata Center Garage", "Kirsch Auditorium"],
      architect: "Frank O. Gehry And Associates",
      mailing: "77 Massachusetts Avenue",
      viewangle: "northeast",
      contents: [
        { name: "Dreyfoos Building" },
        { name: "Gates Building" },
        { category: ["room"], name: "Kirsch Auditorium (32-123)" },
        {
          url: "http://www.csail.mit.edu/",
          name:
            "Computer Science and Artificial Intelligence Laboratory (CSAIL)",
          altname: ["Computer Science", "Artificial Intelligence Laboratory"],
        },
        {
          url: "http://lids.mit.edu/",
          name: "Laboratory for Information and Decision Systems (LIDS)",
        },
        {
          url: "http://web.mit.edu/linguistics/www/home.html",
          name: "Linguistics, Dept. of",
        },
        { url: "http://web.mit.edu/philos/www/", name: "Philosophy, Dept. of" },
        { url: "http://www.w3.org/", name: "World Wide Web Consortium (W3C)" },
        { url: "http://icampus.mit.edu/", name: "iCampus" },
        {
          url: "http://web.mit.edu/mitac/",
          name: "MIT Activities Committee (MITAC)",
          altname: ["Activities Committee, MIT (MITAC)"],
        },
        {
          url: "http://dining.mit.edu/venues-menus/forbes",
          category: ["food", "coffee"],
          name: "Forbes family cafe",
        },
        {
          url: "http://dining.mit.edu/venues-menus/faculty",
          category: ["food"],
          name: "Faculty Lunch",
        },
        {
          url: "http://dining.mit.edu/venues-menus/r-and-d",
          category: ["food"],
          name: "R and D (Pub)",
        },
        { name: "Dertouzos Amphitheater" },
      ],
      name: "Ray and Maria Stata Center",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.089304,
      name: "Hayden Memorial Library",
      lat_wgs84: 42.35918261,
      id: "object-14",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-14.jpg",
      street: "160 Memorial Drive",
      bldgnum: "14",
      altname: [
        "Lewis Music Library",
        "Science Library",
        "Humanities Library",
        "Killian Hall",
        "Music Library",
      ],
      architect: "Voorhes Walker Foley & Smith",
      floorplans: ["0", "1", "1M", "2", "2M", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
      contents: [
        { category: ["room"], name: "Killian Hall" },
        {
          url: "http://libraries.mit.edu/music/",
          category: ["library"],
          name: "Lewis Music Library",
        },
        {
          url: "http://libraries.mit.edu/maihaugen/",
          name: "Maihaugen Gallery",
        },
        {
          url: "http://libguides.mit.edu/directory/director",
          category: ["library"],
          name: "Libraries Administrative Offices & Office of the Director",
        },
        {
          url: "http://libraries.mit.edu/ask-us/instruction/dirc.html",
          category: ["library"],
          name: "Digital Instruction Resource Center (DIRC)",
        },
        {
          url: "http://libraries.mit.edu/docs/",
          category: ["library"],
          name: "Document Services",
        },
        {
          url: "http://libraries.mit.edu/hayden/",
          category: ["library"],
          name: "Hayden Memorial Library",
          altname: ["Humanities Library", "Science Library"],
        },
        {
          url: "http://web.mit.edu/comm-forum/",
          name: "Communications Forum, MIT",
        },
        { url: "https://dspace.mit.edu/", name: "DSpace" },
        {
          url: "http://mitgsl.mit.edu/",
          name: "Global Studies and Languages",
          altname: ["Foreign Languages and Literatures"],
        },
        { url: "http://web.mit.edu/biology/guarente/", name: "Guarente Lab" },
        { url: "http://libraries.mit.edu/", name: "Libraries" },
        {
          url: "https://cmsw.mit.edu",
          name: "Comparative Media Studies/Writing (CMS/W)",
        },
        { url: "http://web.mit.edu/lit/www/", name: "Literature, Dept. of" },
        { url: "http://web.mit.edu/wgs/", name: "Women's and Gender Studies" },
        {
          url: "http://web.mit.edu/hass/www/",
          name: "Humanities, Arts, and Social Sciences Program Office",
          altname: [
            "HASS Program Office",
            "HASS Office",
            "HASS Education Office",
          ],
        },
        {
          url: "http://web.mit.edu/shass/",
          name: "School of Humanities, Arts, and Social Sciences (SHASS)",
          altname: ["Humanities, Arts, and Social Sciences, School of"],
        },
        {
          url: "http://libraries.mit.edu/archives/",
          category: ["library"],
          name: "Institute Archives and Special Collections (14N)",
          altname: [
            "History of MIT",
            "Special Collections",
            "Archives, Insitute",
          ],
        },
        { url: "http://libraries.mit.edu/", name: "Libraries (14S, 14E)" },
        {
          url: "http://web.mit.edu/mta/www/music/resources/killianhall.html",
          name: "Killian Hall (14W)",
        },
        {
          url: "http://libraries.mit.edu/archives/thesis-specs/",
          name: "Specifications for Thesis Preparation",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          category: ["clusters"],
          name: "Athena Workstations (14-0637, 14S Hayden Library Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09108651,
      name: "Maclaurin Buildings (4)",
      lat_wgs84: 42.35944306,
      id: "object-4",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-4.jpg",
      street: "182 Memorial Drive (Rear)",
      bldgnum: "4",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "1M", "2", "3", "4", "4M", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        {
          url: "http://dining.mit.edu/venues-menus/cafe4",
          category: ["food", "coffee"],
          name: "Cafe 4",
        },
        { category: ["room"], name: "4-270" },
        { category: ["room"], name: "4-370" },
        { url: "http://web.mit.edu/edgerton/", name: "Edgerton Center" },
        {
          url: "http://web.mit.edu/physics/",
          name: "Physics, Dept. of (Headquarters: 4-304)",
        },
        {
          url: "http://web.mit.edu/physics/",
          name: "Pappalardo Community Room (4-349)",
        },
        {
          url: "http://web.mit.edu/mta/www/",
          name: "Music and Theater Arts",
          altname: ["Theater Arts and Music"],
        },
        { url: "http://web.mit.edu/av/www/", name: "Audio Visual Service" },
        {
          url: "http://web.mit.edu/shass/inside/deansoffice.shtml",
          name:
            "Dean's office for the School of Humanities, Arts, and Social Sciences",
        },
        {
          url: "http://web.mit.edu/frads/",
          name: "Foundation Relations & Academic Development Support (FRADS)",
        },
        { url: "http://web.mit.edu/glasslab/", name: "Glass Lab (4-003)" },
        {
          url: "http://web.mit.edu/ifilm/www/",
          name: "International Film Club",
        },
        {
          url: "http://web.mit.edu/ome/",
          name: "Minority Education, Office of",
          altname: ["Office of Minority Education (OME)"],
        },
        {
          url: "http://web.mit.edu/mitpsc/servlearn/",
          name: "Service Learning",
        },
        {
          url: "http://web.mit.edu/dsl/",
          name: "Student Life, Division of (DSL)",
          altname: ["Dean for Student Life, Office of"],
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (4-167, 4-231, 4-237)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09201464,
      name: "Building 24",
      lat_wgs84: 42.3606665,
      id: "object-24",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-24.jpg",
      street: "Access Via 60 Vassar Street",
      bldgnum: "24",
      architect: "Anderson Beckwith & Haible",
      floorplans: ["0", "0M", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west",
      contents: [
        {
          url: "http://web.mit.edu/nse/nanofluids/",
          name: "Center for Nanofluids Technology",
        },
        {
          url: "https://canes.mit.edu/",
          name: "Center for Advanced Nuclear Energy Systems",
        },
        {
          url: "http://web.mit.edu/nse/",
          name: "Nuclear Science and Engineering, Dept. of (NSE)",
        },
        {
          url: "http://web.mit.edu/esg/www/",
          name: "Experimental Study Group (ESG)",
        },
        {
          url: "http://web.mit.edu/mpc/www/",
          name: "Materials Processing Center",
        },
        { name: "MIT Video Productions MediaLink Studio (24-042)" },
        {
          url: "http://web.mit.edu/due/administration/services/index.html",
          name: "DUE Desktop Support",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09057856,
      name: "Dorrance Building",
      lat_wgs84: 42.36043778,
      id: "object-16",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-16.jpg",
      street: "Access Via 21 Ames Street",
      bldgnum: "16",
      architect: "Anderson Beckwith & Haible",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "9M", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
      contents: [
        {
          url: "http://web.mit.edu/cgr/",
          name: "Center for Gynepathology Research",
        },
        { url: "http://hyperstudio.mit.edu", name: "HyperStudio" },
        {
          url: "http://web.mit.edu/be/",
          name: "Biological Engineering, Department of",
        },
        {
          url: "http://web.mit.edu/comp-med/",
          name: "Comparative Medicine, Division of",
        },
        { url: "http://web.mit.edu/esi/", name: "Earth System Initiative" },
        {
          url: "http://llarc.mit.edu/",
          name: "Language Learning and Resource Center (LLARC)",
        },
        { url: "http://web.mit.edu/concourse/www/", name: "Concourse Program" },
        { url: "http://web.mit.edu/terrascope/www/", name: "Terrascope" },
        { name: "OME Tutorial Services Room (TSR)" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          category: ["clusters"],
          name: "Athena Workstations (16-159)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.0898625,
      name: "Whitaker Building",
      lat_wgs84: 42.36069953,
      id: "object-56",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-56.jpg",
      street: "Access Via 21 Ames Street",
      bldgnum: "56",
      architect: "Anderson Beckwith & Haible",
      floorplans: [
        "00",
        "00M",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "R",
      ],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
      contents: [
        {
          url: "http://web.mit.edu/be/",
          name: "Biological Engineering, Department of",
        },
        {
          url: "http://cehs.mit.edu/",
          name: "Center for Environmental Health Sciences",
          altname: ["Environmental Health Sciences, Center for"],
        },
        {
          url: "http://cehs.mit.edu/",
          name: "Environmental Health Sciences, Center for",
        },
        {
          url: "http://web.mit.edu/wg/",
          name: "Working Group on Support Staff Issues",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (56-129)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08216495,
      name: "Arthur D Little Building",
      lat_wgs84: 42.36116164,
      id: "object-E60",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E60.jpg",
      street: "30 Memorial Drive",
      bldgnum: "E60",
      floorplans: ["0", "1", "2", "3"],
      mailing: "30 Memorial Drive",
      viewangle: "south side",
      contents: [
        {
          url: "http://mitsloan.mit.edu/",
          name: "Sloan School of Management Dean's Office",
        },
        {
          url: "http://mitsloan.mit.edu/",
          name: "Sloan Office of External Relations",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09235723,
      name: "Pierce Laboratory",
      lat_wgs84: 42.3580859,
      id: "object-1",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-1.jpg",
      street: "33 Massachusetts Avenue",
      bldgnum: "1",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "2", "3", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        { category: ["room"], name: "1-190" },
        { category: ["room"], name: "1-390" },
        {
          url: "http://cee.mit.edu/",
          name: "Civil and Environmental Engineering, Dept. of (CEE)",
        },
        {
          url: "http://supplychain.mit.edu/",
          name: "Forum for Supply Chain Innovation",
        },
        {
          url: "http://web.mit.edu/civenv/idr/",
          name: "Infrastructure Systems Development",
        },
        {
          url: "http://web.mit.edu/mit-tdp/www/",
          name: "Technology and Development Program",
        },
        {
          url: "http://web.mit.edu/engineering/",
          name: "Engineering, School of",
        },
        {
          url: "http://web.mit.edu/its/",
          name: "Intelligent Transportation Systems Program",
        },
        {
          url: "http://upop.mit.edu/",
          name: "Undergraduate Practice Opportunities Program (UPOP)",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (1-115, 1-150, 1-190, 1-390)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08982131,
      name: "Dreyfus Building",
      lat_wgs84: 42.36006975,
      id: "object-18",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-18.jpg",
      street: "Access Via 21 Ames Street",
      bldgnum: "18",
      architect: "I. M. Pei & Associates",
      floorplans: ["00", "0", "1", "2", "3", "4", "5", "6"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
      contents: [
        {
          url: "http://chemistry.mit.edu/",
          name: "Department of Chemistry Headquarters",
        },
        {
          url:
            "http://chemistry.mit.edu/research/department-chemistry-instrumentation-facility",
          name: "Department of Chemistry Instrumentation Facility (DCIF)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08902925,
      name: "Landau Building",
      lat_wgs84: 42.36092016,
      id: "object-66",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-66.jpg",
      street: "25 Ames Street",
      bldgnum: "66",
      architect: "I. M. Pei & Partners",
      floorplans: ["00", "0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side",
      contents: [
        {
          url: "http://web.mit.edu/airquality/www/",
          name: "Airborne Organics, Center on",
        },
        {
          url: "http://web.mit.edu/cheme/research/",
          name: "Chemical Engineering, Dept. of",
        },
        {
          url: "http://web.mit.edu/anish/www/MITcomb.html",
          name: "Combustion and Fuels Research Group",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (66-080)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09519377,
      name: "Superconducting Test Facility",
      lat_wgs84: 42.36095321,
      id: "object-N9",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-N9.jpg",
      street: "68 Albany Street",
      bldgnum: "N9",
      architect: "MIT Physical Plant",
      floorplans: ["1", "1M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09349326,
      name: "Wright Brothers Wind Tunnel",
      lat_wgs84: 42.360113,
      id: "object-17",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-17.jpg",
      street: "76 Vassar Street",
      bldgnum: "17",
      architect: "Jackson & Moreland",
      floorplans: ["0", "1"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
      contents: [
        {
          url: "http://web.mit.edu/aeroastro/www/labs/WBWT/",
          name: "Wright Brothers Wind Tunnel (WBWT)",
        },
        { name: "Space Systems Laboratory Flat Floor" },
        {
          url: "http://web.mit.edu/rocketteam/www/",
          name: "MIT Rocket Team Lab",
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09045477,
      name: "Eastman Laboratories",
      lat_wgs84: 42.35953888,
      id: "object-6",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-6.jpg",
      street: "182 Memorial Drive (Rear)",
      bldgnum: "6",
      architect: "Coolidge & Carlson",
      floorplans: ["0", "1", "1M", "2", "2M", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        { category: ["room"], name: "6-120" },
        {
          url: "http://dmse.mit.edu/",
          name: "Materials Science and Engineering, Dept. of (DMSE)",
        },
        {
          url: "http://web.mit.edu/spectroscopy/",
          name: "Spectroscopy Laboratory",
        },
        { url: "http://web.mit.edu/science/", name: "Science, School of" },
        { name: "Chipman Room (6-104)" },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (6-236)",
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (6C-247)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.07730638,
      name: "Building EE19",
      lat_wgs84: 42.36625677,
      street: "1 Rogers Street",
      bldgnum: "EE19",
      id: "object-EE19",
      contents: [
        { url: "https://mitpress.mit.edu/", name: "MIT Press" },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09402814,
      name: "Sloan Laboratory",
      lat_wgs84: 42.36038118,
      street: "127 Massachusetts Avenue",
      bldgnum: "35",
      architect: "Perry Shaw Hepburn Kehoe & Dean",
      floorplans: ["0", "1", "2", "3", "4", "5", "5M"],
      mailing: "77 Massachusetts Avenue",
      id: "object-35",
      contents: [
        { category: ["room"], name: "35-225" },
        {
          url: "http://web.mit.edu/pccs/",
          name: "Park Center for Complex Systems",
        },
        {
          url: "https://autoid.mit.edu/",
          name: "MIT Auto-ID Lab",
          altname: ["Auto-ID Center"],
        },
        {
          url: "http://web.mit.edu/lmp/",
          name: "Laboratory for Manufacturing and Productivity",
        },
        {
          url: "http://web.mit.edu/cdo-program/",
          name: "Computation for Design and Optimization Program",
        },
        {
          url: "http://web.mit.edu/tdp/www/",
          name: "Three Dimensional Printing Project",
        },
        { url: "http://mitworld.mit.edu/", name: "MIT World" },
        {
          url: "http://makerworks.mit.edu/",
          name: "MakerWorks",
          altname: ["Maker Works"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08863856,
      name: "Koch Biology Building",
      lat_wgs84: 42.36162167,
      id: "object-68",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-68.jpg",
      street: "31 Ames Street",
      bldgnum: "68",
      architect: "Goody & Clancy Associates",
      floorplans: [
        "00",
        "0",
        "0M",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "7M",
        "R",
      ],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
      contents: [
        {
          url: "http://biology.mit.edu/",
          name: "Department of Biology",
          altname: ["Biology, Department of"],
        },
        {
          url: "http://openwetware.org/wiki/BioMicroCenter",
          name: "BioMicro Center",
        },
        { name: "Howard Hughes Medical Institute" },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (68-577A)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09239741,
      name: "Maclaurin Buildings (3)",
      lat_wgs84: 42.35900694,
      id: "object-3",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-3.jpg",
      street: "33 Massachusetts Ave (Rear)",
      bldgnum: "3",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "1M", "2", "3", "3M", "4", "4M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side",
      contents: [
        { category: ["room"], name: "3-133" },
        { category: ["room"], name: "3-270" },
        { category: ["room"], name: "3-370" },
        {
          url: "http://web.mit.edu/micropower/www/home/",
          name: "Office of Graduate Education (OGE)",
          altname: ["Office of Dean of Graduate Education (ODGE)"],
        },
        {
          url: "http://web.mit.edu/micropower/www/home/",
          name: "Micro Power and Nanoengineering Research Group",
        },
        {
          url: "http://web.mit.edu/rgd/www/",
          name: "Reacting Gas Dynamics Laboratory",
        },
        {
          url: "http://web.mit.edu/solab/www/",
          name: "Bioinstrumentation Engineering And Microanalysis (BEAM group)",
        },
        {
          url: "http://bioinstrumentation.mit.edu/",
          name: "BioInstrumentation Laboratory",
        },
        { url: "http://cadlab.mit.edu/", name: "Cadlab, MIT" },
        {
          url: "http://darbelofflab.mit.edu/",
          name: "d'Arbeloff Laboratory for Information Systems and Technology",
        },
        {
          url: "http://web.mit.edu/fluids/www/",
          name:
            "Hatsopoulos Microfluids Laboratory (Fluid Mechanics Laboratory)",
        },
        {
          url:
            "http://architecture.mit.edu/discipline/history-theory-and-criticism",
          name: "History, Theory and Criticism of Architecture and Art",
          altname: ["HTC@MIT"],
        },
        {
          url: "http://icmit.mit.edu/",
          name: "International Consortium for Medical Imaging Technology",
        },
        {
          url: "http://web.mit.edu/mhl/www/",
          name: "Marine Hydrodynamics Lab",
        },
        {
          url: "http://www-me.mit.edu/",
          name: "Mechanical Engineering, Dept. of (MechE)",
        },
        {
          url: "http://mechatronics.mit.edu",
          name: "Mechatronics Research Laboratory",
        },
        {
          url: "http://web.mit.edu/nsl/www/",
          name: "Nonlinear Systems Laboratory",
        },
        {
          url: "http://pergatory.mit.edu",
          name: "Precision Engineering Research Group",
        },
        {
          url: "http://web.mit.edu/ppst/",
          name: "Program in Polymer Science and Technology (PPST)",
          altname: ["Polymer Science and Technology Program"],
        },
        { name: "Pappalardo Laboratory" },
        {
          url: "http://web.mit.edu/admissions/graduate/",
          name: "Admissions, Graduate",
          altname: ["Graduate Admissions"],
        },
        {
          url: "http://web.mit.edu/admissions/www/educoun/",
          name: "Educational Council",
          altname: ["Alumni/ae Interviews"],
        },
        { name: "Margaret Cheney Room (3-310)" },
        {
          url: "http://web.mit.edu/odge/",
          name: "Dean for Graduate Education",
          altname: [
            "Graduate Education, Office of the Dean for",
            "Office of the Dean for Graduate Education",
          ],
        },
        {
          url: "http://web.mit.edu/evp/",
          name: "Executive Vice President, Office of",
          altname: ["Vice President, Executive"],
        },
        { url: "http://gsn.mit.edu", name: "Graduate Student News" },
        { url: "https://president.mit.edu/", name: "President of MIT" },
        { url: "http://web.mit.edu/provost/", name: "Provost, Office of the" },
        {
          url: "http://web.mit.edu/vpr/www/",
          name: "Vice President for Research",
          altname: ["Research, Vice President for"],
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (3-133)",
          altname: ["Athena Cluster"],
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (3-369)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09277267,
      name: "Homberg Building",
      lat_wgs84: 42.35952201,
      id: "object-11",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-11.jpg",
      street: "77 Massachusetts Ave (Rear)",
      bldgnum: "11",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "1M", "2", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        { url: "http://web.mit.edu/ctc/www/", name: "MIT Copytech" },
        {
          url: "http://web.mit.edu/govt-relations/www/",
          name: "Government and Community Relations (OGCR)",
          altname: ["Community and Government Relations, Office of"],
        },
        { url: "http://web.mit.edu/ir/", name: "Institutional Research" },
        {
          url: "http://web.mit.edu/newsoffice/",
          name: "News Office",
          altname: ["Public Relations", "MIT Office of Communications"],
        },
        {
          url: "http://web.mit.edu/sfs/jobs/",
          name: "Student employment",
          altname: ["Employment, student", "Jobs, student"],
        },
        {
          url: "http://web.mit.edu/sfs/",
          name: "Student Financial Services (SFS)",
          altname: [
            "Accounts, student",
            "Billing, students",
            "Financial services, student",
            "Loans, student",
          ],
        },
        {
          url: "http://web.mit.edu/sfs/financial_aid/",
          name: "Financial Aid",
          altname: ["Aid, financial", "Scholarships"],
        },
        {
          url: "http://web.mit.edu/newsoffice/techtalk-info.html",
          name: "Tech Talk",
          altname: ["Newspaper, Campus"],
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          category: ["clusters"],
          name: "Athena Workstations (11-115, 11-004)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09254987,
      name: "Bush Building",
      lat_wgs84: 42.35994494,
      id: "object-13",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-13.jpg",
      street: "105 Massachusetts Avenue (Rear)",
      bldgnum: "13",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "1", "2", "3", "4", "5", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        {
          url: "http://web.mit.edu/cbegroup/",
          name: "Chemical Beam Epitaxy Group",
        },
        {
          url: "http://electroceramics.mit.edu/",
          name: "Electroceramics Group",
        },
        {
          url: "http://web.mit.edu/cmse/www/",
          name: "Center for Materials Science and Engineering (CMSE)",
        },
        {
          url: "http://web.mit.edu/mphotonics/www/",
          name: "Microphotonics Center",
        },
        {
          url: "http://web.mit.edu/campus-activities/www/html/lobby13.html",
          name: "Lobby 13",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08932613,
      name: "Green Building",
      lat_wgs84: 42.36032385,
      id: "object-54",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-54.jpg",
      street: "Access Via 21 Ames Street",
      bldgnum: "54",
      architect: "I. M. Pei & Associates",
      floorplans: [
        "00",
        "0",
        "1",
        "1M",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
      ],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        { category: ["room"], name: "54-100" },
        {
          url: "http://eapsweb.mit.edu/",
          name: "Earth, Atmospheric, and Planetary Sciences (EAPS), Dept. of",
        },
        {
          url: "http://web.mit.edu/e-probe/www/",
          name: "Electron Microprobe Laboratory",
        },
        {
          url: "http://web.mit.edu/petrolab/www/",
          name: "Experimental Petrology Laboratory",
        },
        {
          url: "http://cgcs.mit.edu/",
          name: "Global Change Science, Center for",
        },
        { url: "http://web.mit.edu/hurricanelab/", name: "Hurricane Lab" },
        {
          url: "http://paoc.mit.edu/",
          name: "Program in Atmospheres, Oceans, and Climate",
          altname: ["Atmospheres, Oceans, and Climate, Program in"],
        },
        {
          url: "http://web.mit.edu/mit-whoi/www/",
          name: "WHOI Joint Program in Oceanography, MIT",
        },
        { url: "http://eaps.mit.edu/erl/", name: "Earth Resources Laboratory" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstation (54-100)",
          altname: ["Athena Cluster"],
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (54-827A)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09066524,
      name: "Parsons Laboratory",
      lat_wgs84: 42.36243249,
      id: "object-48",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-48.jpg",
      street: "15 Vassar Street",
      bldgnum: "48",
      architect: "Perry Shaw & Hepburn",
      floorplans: ["00", "0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east",
      contents: [
        {
          url: "http://cee.mit.edu/research/parsons-laboratory",
          name: "Parsons Laboratory for Environmental Science and Engineering",
          altname: [
            "Environmental Science and Engineering, Parsons Laboratory for",
          ],
        },
        {
          url: "http://web.mit.edu/towtank/www/",
          name: "Testing Tank (Tow Tank)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09356175,
      name: "Samuel Tak Lee Building",
      lat_wgs84: 42.35974993,
      id: "object-9",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-9.jpg",
      street: "105 Massachusetts Avenue",
      bldgnum: "9",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["00", "0", "1", "2", "3", "4", "5", "6"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
      contents: [
        { name: "Samuel Tak Lee MIT Real Estate Entrepreneurship Lab" },
        {
          url: "http://dusp.mit.edu/",
          name: "Urban Studies and Planning, Dept. of (DUSP)",
        },
        {
          url: "http://web.mit.edu/spurs/www/",
          name: "Special Program in Urban and Regional Studies (SPURS)",
        },
        {
          url: "http://web.mit.edu/cre/",
          name: "Real Estate, Center for",
          altname: ["Center for Real Estate"],
        },
        { url: "http://senseable.mit.edu", name: "Senseable City Lab (9-216)" },
        {
          url: "http://ghmhi.mit.edu/",
          name: "Global Health and Medical Humanities Initiative",
        },
        {
          url: "http://web.mit.edu/mitcable/www/",
          name: "Cable Television, MIT",
          altname: ["MIT Cable"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09201647,
      name: "Maclaurin Buildings (10)",
      lat_wgs84: 42.35967738,
      id: "object-10",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-10.jpg",
      street: "222 Memorial Drive",
      bldgnum: "10",
      altname: ["Barker Library", "Engineering Library"],
      architect: "William Welles Bosworth",
      floorplans: [
        "0",
        "1",
        "1M",
        "2",
        "3",
        "4",
        "4M",
        "5",
        "6",
        "7",
        "8",
        "8M",
      ],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
      contents: [
        { category: ["room"], name: "10-250" },
        { category: ["room"], name: "Bush Room (10-105)" },
        {
          url: "http://libraries.mit.edu/barker/",
          category: ["library"],
          name: "Barker Library",
        },
        { url: "http://web.mit.edu/admissions/", name: "Admissions Office" },
        {
          url: "http://mitadmissions.org/",
          name: "Admissions, Undergraduate",
          altname: ["Undergraduate Admissions"],
        },
        { name: "Emma Rogers Room (10-340)" },
        {
          url: "https://energy.mit.edu/energycommons/",
          name: "Energy Commons (10-063)",
        },
        {
          url: "http://akpia.mit.edu/",
          name: "Aga Khan Program for Islamic Architecture",
        },
        {
          url:
            "http://architecture.mit.edu/discipline/history-theory-and-criticism",
          name: "History, Theory and Criticism of Architecture and Art",
          altname: ["HTC@MIT"],
        },
        {
          url: "http://lees.mit.edu/lees/",
          name: "Laboratory for Electromagnetic and Electronic Systems (LEES)",
        },
        {
          url: "http://web.mit.edu/mitpostdocs/",
          name: "Postdoctoral Scholars",
        },
        {
          url: "http://web.mit.edu/spurs/www/",
          name:
            "Special Program for Urban and Regional Studies of Developing Areas (SPURS)",
        },
        {
          url: "http://web.mit.edu/sigus/www/NEW/index.html",
          name: "Special Interest Group in Urban Settlements (SIGUS)",
        },
        {
          url: "http://web.mit.edu/chancellor/",
          name: "Chancellor, Office of the",
        },
        {
          url: "http://web.mit.edu/museum/exhibitions/compton.html",
          name: "Compton Gallery",
        },
        { url: "http://web.mit.edu/invent/", name: "Lemelson-MIT Program" },
        {
          url:
            "http://due.mit.edu/experiential-learning/office-experiential-learning",
          name: "Office of Experiential Learning (10-110)",
        },
        { name: "Dean for Undergraduate Research" },
        {
          url: "http://web.mit.edu/facilities/services/cleaning.html",
          name: "Building Services",
          altname: ["Custodial Services", "Furniture Set-ups", "Pest Control"],
        },
        { url: "http://web.mit.edu/giving/", name: "Giving to MIT" },
        {
          url: "http://web.mit.edu/campus-activities/www/html/lobby10.html",
          name: "Lobby 10",
        },
        { url: "http://web.mit.edu/ombud/", name: "Ombuds Office" },
        {
          url: "http://dusp.mit.edu/",
          name: "Urban Studies and Planning, Dept. of",
        },
        {
          url: "http://web.mit.edu/womensleague/",
          name: "Women's League, MIT",
        },
        {
          url: "http://web.mit.edu/dusp/cdd/",
          name: "City Design and Development",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          category: ["clusters"],
          name: "Athena Workstations (10-500, Barker Library)",
          altname: ["Athena Cluster"],
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          category: ["clusters"],
          name: "Athena Workstations (10-600, Barker Library)",
          altname: ["Athena Cluster"],
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (10-384)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      website: "http://web.mit.edu/bcs/",
      long_wgs84: -71.09164294,
      name: "Brain and Cognitive Sciences (BCS)",
      lat_wgs84: 42.36232777,
      id: "object-46",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-46.jpg",
      street: "43 Vassar Street",
      bldgnum: "46",
      architect:
        "Goody, Clancy & Associates with Charles Correa Associates Architects",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north",
      contents: [
        {
          category: ["room"],
          name: "Singleton Auditorium (46-3002)",
          altname: ["46-3002"],
        },
        {
          url: "http://web.mit.edu/mcgovern/",
          name: "McGovern Institute for Brain Research",
        },
        {
          url: "http://web.mit.edu/picower/",
          name: "Picower Institute for Learning and Memory",
        },
        {
          url: "http://web.mit.edu/mitmri/",
          name:
            "Martinos Imaging Center at the McGovern Institute for Brain Research",
        },
        {
          url: "http://cbcl.mit.edu/",
          name: "Biological and Computational Learning, Center for",
          altname: ["Center for Biological and Computational Learning"],
        },
        { url: "http://web.mit.edu/moore/", name: "Moore Lab" },
        { url: "http://hebb.mit.edu/", name: "Seung Laboratory" },
        { url: "http://www.mit.edu/~msur/", name: "Sur Laboratory" },
        { url: "http://web.mit.edu/bcs/sinha/", name: "Sinha Laboratory" },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (46-2033N)",
        },
        { name: "Motorcycle parking" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.10442611,
      name: "Information Systems & Technology Operations",
      lat_wgs84: 42.35432356,
      id: "object-W91",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W91.jpg",
      street: "565-570 Memorial Drive",
      bldgnum: "W91",
      architect: "Jackson & Moreland",
      floorplans: ["0", "1", "1M", "2"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
      contents: [
        {
          url: "http://ist.mit.edu/",
          name: "Information Systems & Technology (IS&T)",
          altname: ["IS&T"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://s-p.mit.edu",
      long_wgs84: -71.10221874,
      floorplans: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      lat_wgs84: 42.35972041,
      id: "object-NW86",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW86.jpg",
      street: "70 Pacific Street",
      bldgnum: "NW86",
      architect: "Steffian Bradley Associates",
      mailing: "77 Massachusetts Avenue",
      viewangle: "northeast",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/sidney-pacific",
          name: "Graduate residence",
        },
        {
          url: "http://www.pacificstreetcafe.com/",
          category: ["food"],
          name: "Pacific St. Cafe",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (NW86-158)",
          altname: ["Athena Cluster"],
        },
      ],
      name: "Sidney Pacific",
    },
  ][
    {
      category: ["building", "residence", "dormitory"],
      website: "http://web.mit.edu/simmons-hall/www/",
      long_wgs84: -71.1015208,
      name: "Simmons Hall",
      lat_wgs84: 42.35710862,
      id: "object-W79",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W79.jpg",
      street: "229 Vassar Street",
      bldgnum: "W79",
      architect: "Steven Holl/Perry Dean Rogers",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      mailing: "229 Vassar Street",
      viewangle: "southwest",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/simmons-hall",
          name: "Undergraduate residence",
        },
        {
          url: "https://studentlife.mit.edu/dining/residential-dining",
          category: ["food"],
          name: "Simmons Dining",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    }
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      long_wgs84: -71.08390876,
      name: "Eastgate (Family Housing)",
      lat_wgs84: 42.36173608,
      id: "object-E55",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E55.jpg",
      street: "60 Wadsworth Street",
      bldgnum: "E55",
      architect: "Catalano Cooper Brannen & Shimamoto",
      floorplans: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      mailing: "Eastgate",
      viewangle: "southeast corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/eastgate-apartments",
          name: "Graduate residence",
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      long_wgs84: -71.10325778,
      name: "Westgate (Family Housing)",
      lat_wgs84: 42.35499776,
      id: "object-W85",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W85.jpg",
      street: "540 Memorial Drive (Rear)",
      bldgnum: "W85",
      architect: "Hugh Stubbins Associates",
      floorplans: [
        "00",
        "0",
        "0M",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
      ],
      mailing: "540 Memorial Drive",
      viewangle: "southwest corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/westgate-apartments",
          name: "Graduate residence",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09195128,
      name: "EG&G Education Center",
      lat_wgs84: 42.36113825,
      id: "object-34",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-34.jpg",
      street: "50 Vassar Street",
      bldgnum: "34",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north",
      contents: [
        { category: ["room"], name: "34-101" },
        { category: ["room"], name: "Grier Rooms (34-401A, 34-401B)" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09273098,
      name: "Brown Building",
      lat_wgs84: 42.36085666,
      id: "object-39",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-39.jpg",
      street: "60 Vassar Street",
      bldgnum: "39",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        {
          url: "http://mtlweb.mit.edu/researchgroups/mems/",
          name: "MEMS @ MIT",
          altname: ["Micro Electro Mechanical Systems"],
        },
        {
          url: "http://mtlweb.mit.edu/",
          name: "Microsystems Technology Laboratories (MTL)",
        },
        { url: "http://nanoweb.mit.edu/", name: "NanoStructures Laboratory" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.0923498,
      name: "Fairchild Building (38)",
      lat_wgs84: 42.36107393,
      id: "object-38",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-38.jpg",
      street: "50 Vassar Street",
      bldgnum: "38",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        {
          url: "http://www-eecs.mit.edu/",
          name: "Electrical Engineering and Computer Science (EECS), Dept. of",
          altname: [
            "Computer Science and Electrical Engineering",
            "Department of Electrical Engineering and Computer Science",
          ],
        },
        { url: "http://www.sds.lcs.mit.edu/spd/larch/", name: "Larch" },
        {
          url: "http://rleweb.mit.edu/sebl/",
          name: "Scanning Electron Beam Lithography (SEBL)",
        },
        {
          url: "http://web.mit.edu/cmshop/",
          name: "Central Machine Shop",
          altname: ["Machine Shop, Central"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09166758,
      name: "Fairchild Building (36)",
      lat_wgs84: 42.36143722,
      id: "object-36",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-36.jpg",
      street: "50 Vassar Street",
      bldgnum: "36",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "0M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
      contents: [
        {
          url: "http://touchlab.mit.edu/",
          name: "Laboratory for Human and Machine Haptics",
          altname: ["Touch Lab"],
        },
        {
          url: "http://rleweb.mit.edu/",
          name: "Research Laboratory of Electronics (RLE)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09115294,
      name: "Compton Laboratories",
      lat_wgs84: 42.36085795,
      id: "object-26",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-26.jpg",
      street: "Access Via 60 Vassar Street",
      bldgnum: "26",
      architect: "Skidmore Owings & Merrill",
      floorplans: ["0", "0M", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side",
      contents: [
        { category: ["room"], name: "26-100" },
        {
          url: "http://ceta.mit.edu/",
          name: "Electromagnetic Theory and Applications, Center for",
        },
        {
          url: "http://www2.lns.mit.edu/",
          name: "Laboratory for Nuclear Science",
        },
        {
          url: "http://cua.mit.edu/CUA_web/home.htm",
          name: "Ultracold Atoms, MIT-Harvard Center for",
          altname: ["MIT-Harvard Center for Ultracold Atoms"],
        },
        { url: "http://gambit.mit.edu/", name: "MIT Game Lab" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstation (26-100)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09318676,
      name: "Rogers Building",
      lat_wgs84: 42.35928923,
      id: "object-7",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-7.jpg",
      street: "77 Massachusetts Avenue",
      bldgnum: "7",
      altname: ["Rotch Library", "Architecture & Planning Library"],
      architect: "Bosworth & Carlson",
      floorplans: ["0", "1", "2", "2M", "3", "3M", "4", "5", "6"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        { category: ["room"], name: "Lobby 7" },
        {
          url: "http://web.mit.edu/infocenter/",
          name: "Information Center (Visitor Center)",
          altname: ["Visitor Center", "Campus Tour Information"],
        },
        {
          url: "http://libraries.mit.edu/rotch/",
          category: ["library"],
          name: "Rotch Library",
        },
        {
          url: "http://dining.mit.edu/venues-menus/steam",
          category: ["food", "coffee"],
          name: "Steam Cafe",
        },
        {
          url: "http://dining.mit.edu/venues-menus/bosworths",
          category: ["food", "coffee"],
          name: "Bosworth's Cafe",
        },
        { url: "http://architecture.mit.edu/", name: "Architecture, Dept. of" },
        { url: "http://destech.mit.edu/", name: "Design and Computation" },
        {
          url: "http://web.mit.edu/publicdisputes/",
          name: "Public Disputes Program (MIT/Harvard)",
        },
        {
          url: "http://web.mit.edu/crcp/",
          name: "Reflective Community Practice, Center for",
        },
        {
          url: "http://web.mit.edu/hmtl/www/",
          name: "Rohsenow Heat and Mass Transfer Laboratory",
        },
        {
          url: "http://web.mit.edu/urop/",
          name: "Undergraduate Research Opportunities Program (UROP)",
          altname: ["Research, Undergraduate"],
        },
        {
          url: "http://dusp.mit.edu/",
          name: "Urban Studies and Planning, Dept. of",
        },
        {
          url: "http://web.mit.edu/uaap/",
          name: "Undergraduate Advising and Academic Programming",
        },
        {
          url: "http://web.mit.edu/atic/www/",
          name: "Adaptive Technology for Information and Computing (ATIC)",
        },
        {
          url: "http://loohooloo.mit.edu/",
          name: "Architecture and Planning, School of",
        },
        {
          url: "http://web.mit.edu/ccrr/",
          name: "Campus Committee on Race Relations",
        },
        {
          url: "http://web.mit.edu/due/",
          name: "Dean for Undergraduate Education",
          altname: [
            "Undergraduate Education, Office of the Dean for",
            "Office of the Dean for Undergraduate Education",
          ],
        },
        {
          url: "http://web.mit.edu/corporation/",
          name: "Corporation, The MIT",
        },
        {
          url: "http://web.mit.edu/dso/www/",
          name: "Disability Services Office",
          altname: ["Accessibility Services"],
        },
        {
          url: "http://web.mit.edu/ogc/",
          name: "Office of the General Counsel (OGC)",
          altname: [
            "Patent office",
            "Senior Counsel's Office",
            "General Counsel, Office of",
            "Intellectual Property Counsel",
          ],
        },
        {
          url: "http://ist.mit.edu/services/athena",
          category: ["clusters"],
          name: "Athena Workstations (Rotch Library)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08779281,
      name: "Ford Building (E18)",
      lat_wgs84: 42.361767,
      id: "object-E18",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E18.jpg",
      street: "50 Ames Street",
      bldgnum: "E18",
      architect: "Mark Linethal",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://web.mit.edu/iso/",
          name: "International Students Office (ISO)",
        },
        {
          url: "http://web.mit.edu/scholars/",
          name: "International Scholars Office (ISchO)",
        },
        {
          url: "https://idss.mit.edu/",
          name: "Institute for Data, Systems, and Society (IDSS)",
        },
        {
          url: "http://ssrc.mit.edu/",
          name: "Sociotechnical Systems Research Center",
        },
        {
          url:
            "http://web.mit.edu/facilities/about/operations/repair-maint.html",
          name: "Repair and Maintenance",
          altname: [
            "HVAC (Heating, Ventilation, Air-conditioning)",
            "Keys",
            "Lock Services",
          ],
        },
        {
          url: "http://writing.mit.edu/wcc",
          name: "Writing and Communication Center",
        },
        {
          url:
            "http://cmsw.mit.edu/education/writing-rhetoric-professional-communication/",
          name: "Writing, Rhetoric, and Professional Communication (WRAP)",
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (E18-317)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09086392,
      name: "Building 8",
      lat_wgs84: 42.35999279,
      id: "object-8",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-8.jpg",
      street: "Access Via 21 Ames Street",
      bldgnum: "8",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "1M", "2", "3", "4", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east",
      contents: [
        {
          url: "http://www.cambridge-mit.org/",
          name: "Cambridge-MIT Institute (CMI)",
        },
        {
          url: "http://web.mit.edu/cpse/",
          name: "Council on Primary and Secondary Education",
        },
        {
          url: "http://dmse.mit.edu/UhligLab/",
          name: "H.H. Uhlig Corrosion Laboratory",
        },
        {
          url: "http://web.mit.edu/cmrae/cmrae_home.htm",
          name: "Materials Research in Archaeology and Ethnology, Center for",
        },
        {
          url: "http://dmse.mit.edu/",
          name: "Materials Science and Engineering, Dept. of",
        },
        {
          url: "http://web.mit.edu/nanolab/",
          name: "NanoMechanical Technology Laboratory",
        },
        {
          url: "http://web.mit.edu/sma/",
          name: "Singapore-MIT Alliance (SMA)",
        },
        { url: "http://sureshgroup.mit.edu/", name: "Suresh Group" },
        {
          url: "http://cheme.scripts.mit.edu/aso/",
          name: "Administrative Services Organization (ASO)",
        },
        { name: "Physics Undergraduate/Marble Room: (8-329)" },
        { name: "Physics Graduate Lounge: (8-312)" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (8-329)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.0941603,
      name: "Building 41",
      lat_wgs84: 42.36076007,
      id: "object-41",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-41.jpg",
      street: "77 Vassar Street",
      bldgnum: "41",
      architect: "William Welles Bosworth",
      floorplans: ["0", "0M", "1", "2", "3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
      contents: [
        {
          url: "http://web.mit.edu/mecheng/fcp/",
          name: "Fuel Cell Laboratory",
        },
        { url: "http://lean.mit.edu/", name: "Lean Advancement Initiative" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09762766,
      name: "Building N51",
      lat_wgs84: 42.36228443,
      id: "object-N51",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-N51.jpg",
      street: "275 Massachusetts Avenue, enter through N52",
      bldgnum: "N51",
      architect: "Donald Desgranges",
      floorplans: ["0", "1", "2", "3", "3M", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        { url: "http://web.mit.edu/museum/", name: "MIT Museum" },
        {
          url: "http://web.mit.edu/ddfg/",
          name: "Digital Design and Fabrication Group",
        },
        { url: "http://d-lab.mit.edu/", name: "D-Lab" },
        {
          url: "http://edgerton.mit.edu/clubs-and-teams",
          name: "Edgerton Clubs and Teams",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09014001,
      name: "Wang Fitness Center and Alumni Pool",
      lat_wgs84: 42.36114229,
      id: "object-57",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-57.jpg",
      street: "Access Via 6 Vassar Street",
      bldgnum: "57",
      architect: "Anderson Beckwith & Haible",
      floorplans: ["0", "1", "2", "3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstation",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09914244,
      name: "Plasma Science & Fusion Center (NW17)",
      lat_wgs84: 42.35985638,
      id: "object-NW17",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW17.jpg",
      street: "175 Albany Street",
      bldgnum: "NW17",
      architect: "Architectural Resources",
      floorplans: ["0", "1", "2"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.08773035,
      name: "Wood Sailing Pavilion",
      lat_wgs84: 42.35851706,
      id: "object-51",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-51.jpg",
      street: "134 Memorial Drive",
      bldgnum: "51",
      altname: ["Sailing Pavilion"],
      architect: "Coolidge & Carlson",
      floorplans: ["0", "1"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest",
    }
  ][
    {
      category: ["building"],
      long_wgs84: -71.09311746,
      name: "600 Technology Square",
      lat_wgs84: 42.36338959,
      id: "object-NE49",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NE49.jpg",
      street: "600 Technology Square",
      bldgnum: "NE49",
      floorplans: ["2", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://hrweb.mit.edu/",
          name: "Human Resources (HR) (NE49-5000)",
          altname: ["Personnel"],
        },
        {
          url: "http://hrweb.mit.edu/benefits/",
          name: "Benefits Office",
          altname: ["Employee Benefits", "MIT Work-Life Center"],
        },
        {
          url: "http://hrweb.mit.edu/worklife/",
          name: "MIT Work-Life Center",
          altname: ["Family Resource Center"],
        },
        {
          url: "http://hrweb.mit.edu/staffing/",
          name: "Careers at MIT",
          altname: [
            "Jobs available at MIT (staff and faculty)",
            "Positions available at MIT (staff and faculty)",
            "Staff and faculty job openings",
            "Careers at MIT",
            "Employment at MIT",
            "Open positions at MIT",
          ],
        },
        {
          url: "http://web.mit.edu/hr/oed/",
          name: "Organization and Employee Development",
        },
        { url: "http://ocw.mit.edu/", name: "OpenCourseWare (OCW)" },
        {
          url: "https://odl.mit.edu/",
          name: "Office of Digital Learning (ODL)",
        },
        { url: "https://www.edx.org/school/mitx", name: "MITx" },
        { url: "http://web.mit.edu/audiv/www/", name: "Audit Division" },
        { url: "https://solve.mit.edu/", name: "Solve" },
        { url: "https://climatex.mit.edu/", name: "ClimateX" },
        {
          url: "https://vpf.mit.edu/",
          name: "Office of the Vice President for Finance",
        },
        {
          url: "https://vpf.mit.edu/",
          name: "Administrative Services and Operations",
        },
        { url: "https://vpf.mit.edu/", name: "Budget and Financial Analysis" },
        { url: "https://vpf.mit.edu/", name: "Accounts Receivable" },
        { url: "https://vpf.mit.edu/", name: "Cashier Services" },
        {
          url: "https://vpf.mit.edu/",
          name: "Financial Accounting and Reporting",
        },
        {
          url: "https://vpf.mit.edu/",
          name: "Property Office",
          altname: ["Asset Management"],
        },
        { url: "https://vpf.mit.edu/", name: "Sponsored Accounting" },
        { url: "https://vpf.mit.edu/", name: "Tax and Global Operations" },
        { url: "https://vpf.mit.edu/", name: "Accounts Payable" },
        { url: "https://vpf.mit.edu/", name: "Financial Systems" },
        { url: "https://vpf.mit.edu/", name: "HR/Payroll Service Center" },
        { url: "https://vpf.mit.edu/", name: "Merchant Services" },
        { url: "https://vpf.mit.edu/", name: "Procurement Operations" },
        { url: "https://vpf.mit.edu/", name: "Travel and Card Services" },
        { url: "https://vpf.mit.edu/", name: "Contracts" },
        { url: "https://vpf.mit.edu/", name: "Strategic Sourcing" },
        { url: "https://vpf.mit.edu/", name: "Treasury and Planning" },
        {
          url: "https://vpf.mit.edu/",
          name: "Practice and Process Improvement",
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (NE49-3053)",
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09259741,
      name: "500 Technology Square",
      lat_wgs84: 42.36346625,
      id: "object-NE47",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NE47.jpg",
      street: "500 Technology Square",
      bldgnum: "NE47",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://web.mit.edu/cbe/www/",
          name: "Biomedical Engineering, Center for",
          altname: ["Center for Biomedical Engineering"],
        },
        {
          url: "http://web.mit.edu/isn/",
          name: "Institute for Soldier Nanotechnologies",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09160389,
      name: "300 Technology Square",
      lat_wgs84: 42.36335243,
      street: "300 Technology Square",
      bldgnum: "NE45",
      mailing: "77 Massachusetts Avenue",
      id: "object-NE45",
      contents: [
        {
          url: "https://beaverworks.ll.mit.edu/",
          name: "Lincoln Beaver Works",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09272747,
      name: "700 Technology Square",
      lat_wgs84: 42.3640312,
      id: "object-NE48",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NE48.jpg",
      street: "700 Technology Square",
      bldgnum: "NE48",
      floorplans: ["3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest",
      contents: [
        {
          url: "http://web.mit.edu/oeit/",
          name: "Office of Educational Innovation and Technology (OEIT)",
          altname: ["Educational Innovation and Technology, Office of"],
        },
        {
          url: "http://web.mit.edu/amps/",
          name: "Academic Media Production Services (AMPS)",
        },
        {
          url: "http://www.mitfcu.org/",
          name: "MIT Federal Credit Union (FCU)",
          altname: ["Credit Union", "Federal Credit Union, MIT"],
        },
        {
          url: "http://web.mit.edu/cet/",
          name: "Council on Educational Technology",
        },
        {
          url: "http://professional.mit.edu",
          name: "MIT Professional Education",
        },
        {
          url: "http://professional.mit.edu/programs/short-programs",
          name: "MIT Professional Education - Short Programs",
        },
        {
          url: "http://web.mit.edu/professional/advanced-study/",
          name: "MIT Advanced Study Program",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09192003,
      name: "400 Technology Square",
      lat_wgs84: 42.36398399,
      street: "400 Technology Square",
      bldgnum: "NE46",
      mailing: "77 Massachusetts Avenue",
      id: "object-NE46",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09085031,
      name: "Building NE83",
      lat_wgs84: 42.36606978,
      street: "1 Kendall Square",
      bldgnum: "NE83",
      id: "object-NE83",
    }
  ][
    {
      category: ["building", "residence"],
      long_wgs84: -71.0938409,
      name: "Building W2",
      lat_wgs84: 42.35725631,
      id: "object-W2",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W2.jpg",
      street: "311 Memorial Drive",
      bldgnum: "W2",
      floorplans: ["0", "1", "2", "3"],
      mailing: "311 Memorial Drive",
      viewangle: "southeast corner",
    }
  ][
    {
      category: ["building"],
      long_wgs84: -71.08003694,
      name: "Building E90",
      lat_wgs84: 42.3622226,
      street: "1 Main Street",
      bldgnum: "E90",
      id: "object-E90",
      contents: [
        {
          url: "http://ilp.mit.edu/",
          name: "Industrial Liaison Program (ILP)",
        },
        {
          url: "http://www.technologyreview.com/",
          name: "MIT Technology Review",
        },
        {
          url: "https://sloanreview.mit.edu/",
          name: "MIT Sloan Management Review",
        },
        {
          url: "http://corporaterelations.mit.edu/",
          name: "Corporate Relations",
        },
        {
          url: "http://www.cofhe.org/",
          name: "Consortium on Financing Higher Education (COFHE)",
        },
        { url: "http://web.mit.edu/sktech/", name: "MIT Skoltech Initiative" },
        { url: "http://web.mit.edu/agelab/", name: "Age Lab" },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08733249,
      name: "E14",
      lat_wgs84: 42.36046359,
      id: "object-E14",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E14.jpg",
      street: "75 Amherst Street",
      bldgnum: "E14",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side (Photo credit: Andy Ryan)",
      contents: [
        { url: "http://www.media.mit.edu/", name: "Media Lab" },
        {
          url: "http://www.media.mit.edu/mas/",
          name: "Media Arts and Sciences, Program in",
        },
        { name: "Jerome Lemelson Center for Inventive Thinking" },
        {
          url: "http://cba.mit.edu/",
          name: "Center for Bits and Atoms (Workshops)",
        },
        {
          url: "http://visualarts.mit.edu/",
          name: "Program in Art, Culture and Technology",
          altname: [
            "Visual Arts Program (VAP)",
            "Center for Advanced Visual Studies (CAVS)",
          ],
        },
        {
          url: "http://cau.mit.edu/",
          name: "Norman B. Leventhal Center for Advanced Urbanism (LCAU)",
        },
      ],
    },
  ],
  [
    {
      category: ["building", "museum_gallery"],
      long_wgs84: -71.08763489,
      name: "Wiesner Building",
      lat_wgs84: 42.36083844,
      id: "object-E15",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E15.jpg",
      street: "20 Ames Street",
      bldgnum: "E15",
      altname: ["Media Lab", "List Visual Arts Center", "Bartos Theater"],
      architect: "I. M. Pei & Associates",
      floorplans: ["0", "1", "1M", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
      contents: [
        { name: "Bartos Theater" },
        { url: "http://web.mit.edu/arts/", name: "Arts, Office of the" },
        { url: "http://www.media.mit.edu/", name: "Media Lab" },
        {
          url: "http://cba.mit.edu/",
          name: "Center for Bits and Atoms (Offices, Labs)",
        },
        {
          url: "http://visualarts.mit.edu/",
          name: "Program in Art, Culture and Technology",
          altname: [
            "Visual Arts Program (VAP)",
            "Center for Advanced Visual Studies (CAVS)",
          ],
        },
        {
          url: "https://cmsw.mit.edu",
          name: "Comparative Media Studies/Writing (CMS/W)",
        },
        {
          url: "http://www.media.mit.edu/mas/",
          name: "Media Arts and Sciences, Program in",
        },
        { url: "http://sound.media.mit.edu/", name: "Music, Mind and Machine" },
        { url: "http://listart.mit.edu/", name: "List Visual Arts Center" },
        {
          url: "http://www.media.mit.edu/mas/fyo.html",
          name: "Media Arts and Sciences Freshman Program",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09682721,
      name: "Pierce Boathouse",
      lat_wgs84: 42.35531243,
      id: "object-W8",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W8.jpg",
      street: "409 Memorial Drive",
      bldgnum: "W8",
      architect: "Anderson Beckwith & Haible",
      floorplans: ["0", "1", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09780405,
      name: "Carr Indoor Tennis Facility",
      lat_wgs84: 42.35692322,
      id: "object-W53",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W53.jpg",
      street: "410 Memorial Drive (Rear)",
      bldgnum: "W53",
      altname: ["Tennis Bubble", "JB Carr Tennis Bubble"],
      architect: "MIT Planning Office",
      floorplans: ["1"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northeast corner",
    }
  ][
    {
      category: ["building", "residence", "dormitory"],
      website: "http://scripts.mit.edu/~ashdown/",
      long_wgs84: -71.10143935,
      name: "Ashdown House",
      lat_wgs84: 42.35879784,
      street: "235 Albany Street",
      bldgnum: "NW35",
      mailing: "77 Massachusetts Avenue",
      id: "object-NW35",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/ashdown-house",
          name: "Graduate residence",
        },
        {
          url: "http://thirsty-ear.mit.edu/",
          category: ["food"],
          name: "Thirsty Ear Pub",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    }
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://web.mit.edu/warehouse-www/",
      long_wgs84: -71.09997287,
      name: "The Warehouse",
      lat_wgs84: 42.35864725,
      id: "object-NW30",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW30.jpg",
      street: "224 Albany Street",
      bldgnum: "NW30",
      altname: ["Warehouse Apartments"],
      floorplans: ["0", "1", "2", "3", "4", "5", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/warehouse",
          name: "Graduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09789884,
      name: "Francis Bitter Magnet Lab (NW14)",
      lat_wgs84: 42.35963208,
      id: "object-NW14",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW14.jpg",
      street: "150 Albany Street",
      bldgnum: "NW14",
      architect: "C.B. Comstock",
      floorplans: ["0", "1", "2", "3", "4", "5", "6"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        {
          url: "http://web.mit.edu/fbml/cmr/",
          name: "Francis Bitter Magnet Laboratory",
          altname: ["Magnetic Resonance, Center for"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.0982566,
      name: "Francis Bitter Magnet Lab (NW15)",
      lat_wgs84: 42.35934903,
      id: "object-NW15",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW15.jpg",
      street: "166-170 Albany Street",
      bldgnum: "NW15",
      architect: "Perry Shaw Hepburn & Dean",
      floorplans: ["0", "1"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.10946972,
      name: "Building WW15",
      lat_wgs84: 42.35536136,
      id: "object-WW15",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-WW15.jpg",
      street: "350 Brookline Street",
      bldgnum: "WW15",
      floorplans: ["0", "1"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://controllers.mit.edu/site/property/resources",
          name: "MIT Warehouse and Equipment Exchange",
          altname: ["Storage Warehouse"],
        },
        {
          url: "http://web.mit.edu/womensleague/fx/",
          name: "MIT Student Furniture Exchange",
        },
        {
          url: "http://web.mit.edu/facilities/services/mail/mailing.html",
          name: "Mail Services",
          altname: ["Postal Services", "Shipping"],
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08795245,
      name: "Ford Building (E19)",
      lat_wgs84: 42.36212904,
      id: "object-E19",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E19.jpg",
      street: "400 Main Street",
      bldgnum: "E19",
      architect: "Mark Linethal",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url:
            "http://development.mit.edu/offices/individual-giving/leadership-giving/",
          name: "Leadership Giving, Office of",
        },
        {
          url: "http://web.mit.edu/mitei/",
          name: "MIT Energy Initiative (MITEI)",
        },
        {
          url: "http://web.mit.edu/ceepr/www/",
          name: "Energy and Environmental Policy Research (CEEPR), Center for",
        },
        {
          url: "http://lfee.mit.edu/",
          name: "Laboratory For Energy and the Environment (LFEE)",
        },
        {
          url: "http://web.mit.edu/globalchange/www/",
          name: "Science and Policy of Global Change, Joint Program on the",
        },
        {
          url: "http://web.mit.edu/knight-science/",
          name: "Knight Science Journalism Fellowships",
        },
        {
          url: "http://web.mit.edu/community-giving/",
          name: "Community Giving at MIT",
        },
        {
          url: "http://ist.mit.edu/services/consulting/usability#ulab",
          name: "Usability Lab",
        },
        {
          url: "http://web.mit.edu/ipc/www/",
          name: "Industrial Performance Center",
        },
        {
          url: "http://web.mit.edu/communityservices/qcc/",
          name: "Quarter Century Club, MIT",
        },
        {
          url: "http://web.mit.edu/development/",
          name: "Communications and Donor Relations",
        },
        { url: "http://web.mit.edu/cps/", name: "Communications Initiatives" },
        {
          url: "http://web.mit.edu/referencepubs/",
          name: "Reference Publications",
        },
        {
          url: "http://web.mit.edu/retireesassoc/",
          name: "Retirees, Association of MIT",
        },
        {
          url: "http://web.mit.edu/communityservices/",
          name: "Community Services Office, MIT",
        },
        {
          url: "http://ist.mit.edu/services/telephony",
          name: "Telephone Support Services",
        },
        {
          url: "http://web.mit.edu/cbi/",
          name: "Biomedical Innovation, Center for",
          altname: ["Center for Biomedical Innovation"],
        },
        {
          url: "http://tatacenter.mit.edu",
          name: "Tata Center for Technology and Design",
        },
        {
          url: "http://cnre.mit.edu/",
          name: "Kuwait-MIT Center for Natural Resources and the Environment",
        },
        {
          url: "http://tll.mit.edu/",
          name: "Teaching and Learning Laboratory",
        },
        {
          url: "http://www.povertyactionlab.com/global-office",
          name: "Abdul Latif Jameel Poverty Action Lab (J-PAL)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08663216,
      name: "Health Services",
      lat_wgs84: 42.36102212,
      id: "object-E23",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E23.jpg",
      street: "25 Carleton Street",
      bldgnum: "E23",
      altname: ["MIT Medical"],
      architect: "Mitchell Giurgola Gruzen Partners",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        {
          url: "http://medweb.mit.edu/directory/services/wellness.html",
          name: "Community Wellness",
          altname: ["Wellness classes"],
        },
        {
          url: "http://medweb.mit.edu/",
          name: "MIT Medical Department",
          altname: ["Infirmary", "Emergency Care"],
        },
        {
          url: "http://medweb.mit.edu/directory/services/mental_health.html",
          name: "Mental Health and Counseling",
        },
        {
          url: "http://medweb.mit.edu/healthplans/student/",
          name: "Student Health Plan, MIT",
          altname: ["Health Plan, Student"],
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (E23-First Floor)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.10042057,
      name: "The David H. Koch Childcare Center",
      lat_wgs84: 42.35771027,
      bldgnum: "W64",
      architect: "D.W. Arthur Associates Architecture, Inc.",
      mailing: "77 Massachusetts Avenue",
      id: "object-W64",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09736187,
      name: "Building NW13",
      lat_wgs84: 42.3598849,
      id: "object-NW13",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW13.jpg",
      street: "144 Albany Street",
      bldgnum: "NW13",
      floorplans: ["0", "1", "2", "3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
    }
  ][
    {
      category: ["building", "Eastgate Parking Area"],
      long_wgs84: -71.08696429,
      name: "Gray House",
      lat_wgs84: 42.3596025,
      id: "object-E1",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E1.jpg",
      street: "111 Memorial Drive",
      bldgnum: "E1",
      altname: ["President's House"],
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "2", "3", "3M", "R"],
      mailing: "111 Memorial Drive",
      viewangle: "south side",
    }
  ][
    {
      category: ["building"],
      long_wgs84: -71.09686312,
      name: "Building NW12",
      lat_wgs84: 42.36010305,
      id: "object-NW12",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW12.jpg",
      street: "138 Albany Street",
      bldgnum: "NW12",
      architect: "J. Fruchtbaum",
      floorplans: ["0", "1", "1M", "2", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        {
          url: "http://web.mit.edu/nrl/www/",
          name: "Nuclear Reactor Laboratory",
        },
      ],
    }
  ],
  [
    {
      category: ["building", "museum_gallery"],
      long_wgs84: -71.09718823,
      name: "N52",
      lat_wgs84: 42.36227273,
      id: "object-N52",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-N52.jpg",
      street: "265 Massachusetts Avenue",
      bldgnum: "N52",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast",
      contents: [
        {
          url: "http://ehs.mit.edu/",
          name:
            "EHS Office: Biosafety, Environmental Management, Industrial Hygiene/Hazard Assessment & Control, Safety and Radiation Protection",
          altname: ["Environment Health and Safety Office"],
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (N52-172)",
        },
      ],
    },
  ],
  [
    {
      category: ["building", "Eastgate Parking Area"],
      long_wgs84: -71.08264775,
      name: "MIT Sloan",
      lat_wgs84: 42.36135175,
      id: "object-E62",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E62.jpg",
      street: "100 Main Street",
      bldgnum: "E62",
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side (Photo credit: Melody Craven)",
      contents: [
        { name: "The Porter Center for Management Education" },
        {
          url: "http://mitsloan.mit.edu/",
          name: "Sloan School of Management",
          altname: ["Management, Sloan School of"],
        },
        {
          url: "http://mitsloan.mit.edu/execed/",
          name: "Sloan Executive Education",
        },
        { name: "Siteman Dining Hall" },
        { name: "East Garage" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08788625,
      name: "Mudd Building",
      lat_wgs84: 42.36148439,
      id: "object-E17",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E17.jpg",
      street: "40 Ames Street",
      bldgnum: "E17",
      floorplans: ["0", "1", "2", "3", "4", "5", "5M", "6", "7", "7M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://ist.mit.edu/help",
          name: "IS&T Service Desk",
          altname: [
            "Computer Help",
            "Customer Support",
            "Help and Consulting, Computing",
            "Walk-In Computing Help",
          ],
        },
        { url: "https://atlas.mit.edu/", name: "Atlas Service Center" },
        {
          url: "http://web.mit.edu/facilities/transportation/",
          name: "Parking and Transportation",
          altname: ["Transportation and parking"],
        },
        {
          url: "http://web.mit.edu/mitcard/",
          name: "MIT ID Card Services, Atlas Service Center",
          altname: ["TechCash", "ID card"],
        },
        {
          url: "http://tpp.mit.edu/",
          name: "Technology, Management and Policy Program (TPP)",
        },
        {
          url: "http://web.mit.edu/hman-genomics/www/",
          name: "Human Genomics Laboratory",
        },
        {
          url: "https://capd.mit.edu/",
          name: "Career Advising & Professional Development",
          altname: ["Careers Office", "Prehealth Advising", "Premed Advising"],
        },
        {
          url: "https://oel.mit.edu/global-education",
          name: "Global Education",
        },
        {
          url: "http://web.mit.edu/studyabroad/",
          name: "Study Abroad and Distinguished Fellowships",
        },
        {
          url: "http://seari.mit.edu/",
          name: "Systems Engineering Advancement Research Initiative",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09955089,
      name: "Heinz Building",
      lat_wgs84: 42.35810548,
      id: "object-W59",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W59.jpg",
      street: "201 Vassar Street",
      bldgnum: "W59",
      floorplans: ["0", "1", "2"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
      contents: [
        {
          url: "http://dining.mit.edu/",
          name: "MIT Dining",
          altname: ["Catering", "Dining"],
        },
        { url: "http://web.mit.edu/housing/", name: "Housing Office" },
        {
          url:
            "https://studentlife.mit.edu/wellness-and-support/residential-education",
          name: "Residential Education",
        },
        { url: "http://web.mit.edu/afrotc/www/", name: "Air Force ROTC" },
        { url: "http://web.mit.edu/armyrotc/", name: "Army ROTC" },
        { url: "http://web.mit.edu/navyrotc/", name: "Navy ROTC" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08927559,
      name:
        "The David H. Koch Institute for Integrative Cancer Research at MIT",
      lat_wgs84: 42.36229596,
      street: "500 Main Street",
      bldgnum: "76",
      mailing: "77 Massachusetts Avenue",
      id: "object-76",
      contents: [
        {
          url: "http://ki.mit.edu/",
          name:
            "The David H. Koch Institute for Integrative Cancer Research at MIT",
        },
        {
          url: "http://ki.mit.edu/galleries/about",
          name: "Koch Institute Public Galleries",
        },
        {
          url: "http://web.mit.edu/kochcafe/",
          category: ["food"],
          name: "Koch Cafe",
        },
        {
          url: "http://ki.mit.edu/sbc/histology",
          name: "Hope Babette Tang (1983) Histology Facility",
        },
        {
          url: "http://web.mit.edu/biopolymers/www/",
          name: "Biopolymers & Proteomics Core Facility",
        },
        { url: "http://web.mit.edu/hyneslab/", name: "Hynes Lab" },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (76-154)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.0883196,
      name: "Walker Memorial",
      lat_wgs84: 42.35936241,
      id: "object-50",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-50.jpg",
      street: "142 Memorial Drive",
      bldgnum: "50",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "2", "3", "3M", "4", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        {
          url: "http://web.mit.edu/muddy/",
          category: ["food"],
          name: "Muddy Charles Pub",
        },
        {
          url: "http://studentlife.mit.edu/cac/spaces/walker-memorial",
          name: "Morss Hall",
          altspell: ["Morse Hall"],
        },
        {
          url: "http://wmbr.mit.edu/",
          name: "WMBR-FM Radio",
          altname: ["Radio Station"],
        },
        {
          url: "http://web.mit.edu/w1mx/",
          name: "W1MX Radio Society",
          altname: ["Ham Radio Society"],
        },
        {
          url: "http://bsu.scripts.mit.edu/wp/",
          name: "Black Students' Union (BSU) Lounge (50-105)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09956777,
      name: "Plasma Science & Fusion Center (NW22)",
      lat_wgs84: 42.35971236,
      id: "object-NW22",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW22.jpg",
      street: "185 Albany Street",
      bldgnum: "NW22",
      floorplans: ["0", "1", "2"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
      contents: [
        { url: "http://space.mit.edu/LIGO/", name: "MIT LIGO Laboratory" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09351022,
      name: "Power Plant",
      lat_wgs84: 42.36110846,
      id: "object-42",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-42.jpg",
      street: "59 Vassar Street",
      bldgnum: "42",
      architect: "William Welles Bosworth",
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side",
      contents: [
        {
          url:
            "http://web.mit.edu/facilities/about/maint-util/utilities/cup.html",
          name: "Cogeneration Facility",
          altname: ["Cogen"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.0932115,
      name: "Power Plant Annex",
      lat_wgs84: 42.36114493,
      id: "object-43",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-43.jpg",
      street: "57 Vassar Street",
      bldgnum: "43",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "2", "2M", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southeast corner",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09871678,
      name: "Plasma Science & Fusion Center (NW16)",
      lat_wgs84: 42.36002794,
      id: "object-NW16",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW16.jpg",
      street: "167 Albany Street",
      bldgnum: "NW16",
      floorplans: ["0", "1", "2", "3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side",
      contents: [
        {
          url: "http://www.psfc.mit.edu/",
          name: "Plasma Science and Fusion Center",
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09914629,
      name: "Plasma Science & Fusion Center (NW21)",
      lat_wgs84: 42.3590636,
      id: "object-NW21",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW21.jpg",
      street: "190 Albany Street",
      bldgnum: "NW21",
      floorplans: ["0", "1", "1M", "2", "2M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.10467329,
      name: "Campus Police",
      lat_wgs84: 42.35553858,
      id: "object-W89",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W89.jpg",
      street: "301 Vassar Street",
      bldgnum: "W89",
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
      contents: [
        {
          url: "http://web.mit.edu/cp/www/",
          name: "MIT Police",
          altname: ["Police, MIT", "Campus Police", "Security, Personal"],
        },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08367668,
      name: "Morris and Sophie Chang Building",
      lat_wgs84: 42.36073592,
      id: "object-E52",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E52.jpg",
      street: "50 Memorial Drive",
      bldgnum: "E52",
      altname: ["Faculty Club"],
      architect: "Donald Des Granges",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "7M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        {
          url: "http://mitsloan.mit.edu/",
          name: "Sloan School of Management",
          altname: ["Business School"],
        },
        { url: "http://economics.mit.edu/", name: "Economics, Dept. of" },
        {
          url: "https://sambergconferencecenter.mit.edu/",
          category: ["food"],
          name: "Samberg Conference Center",
        },
        {
          url: "http://mitsloan.mit.edu/iwer/",
          name: "Institute for Work and Employment Research",
        },
        {
          url: "http://mitsloan.mit.edu/executivemba/",
          name: "Sloan Executive MBA Program",
        },
        { url: "http://web.mit.edu/ctc/www/", name: "MIT Copytech" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08359273,
      name: "Hermann Building",
      lat_wgs84: 42.36118563,
      id: "object-E53",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E53.jpg",
      street: "30 Wadsworth Street",
      bldgnum: "E53",
      altname: ["Dewey Library", "Management & Social Sciences Library"],
      architect: "Catalano Brannen & Shimamoto",
      floorplans: ["0", "0M", "1", "2", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "northwest corner",
      contents: [
        {
          url: "http://libraries.mit.edu/dewey/",
          category: ["library"],
          name: "Dewey Library",
        },
        {
          url: "http://web.mit.edu/catalogue/overv.chap6-crems.shtml",
          name:
            "Computational Research in Economics and Management, Center for",
        },
        {
          url: "http://cci.mit.edu/",
          name: "Collective Intelligence (CCI), Center for",
        },
        {
          url: "http://gssd.mit.edu/",
          name: "Global System for Sustainable Development",
        },
        {
          url: "http://mitsloan.mit.edu/research/profit/",
          name: "Productivity from Information Technology",
        },
        {
          url: "http://web.mit.edu/sloan-msa/",
          name: "Sloan School of Management Management Science Area",
        },
        {
          url: "http://web.mit.edu/sloan-msa/",
          name: "Management Science Area at the Sloan School",
        },
        {
          url: "http://web.mit.edu/polisci/",
          name: "Political Science, Dept. of",
        },
        {
          url: "http://web.mit.edu/anthropology/",
          name: "Anthropology, Dept. of",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08485302,
      name: "Muckley Building",
      lat_wgs84: 42.36116319,
      id: "object-E40",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E40.jpg",
      street: "1 Amherst Street",
      bldgnum: "E40",
      architect: "Densmore Leclear & Robbins",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://entrepreneurship.mit.edu/",
          name: "Martin Trust Center for MIT Entrepreneurship",
        },
        { url: "http://lgo.mit.edu/", name: "Leaders for Global Operations" },
        {
          url: "http://web.mit.edu/orc/www/",
          name: "Operations Research Center",
        },
        {
          url: "http://sdm.mit.edu/",
          name: "System Design and Management Program (SDM)",
        },
        {
          url: "http://scm.mit.edu/",
          name: "Supply Chain Management Program",
          altname: ["Master of Engineering in Logistics (MLOG)"],
        },
        {
          url: "http://ctl.mit.edu/",
          name: "Center for Transportation & Logistics (CTL)",
          altname: ["Transportation & Logistics, Center for"],
        },
        {
          url: "http://web.mit.edu/misti/",
          name: "MIT International Science and Technology Initiatives (MISTI)",
        },
        {
          url: "http://web.mit.edu/cis/",
          name: "International Studies, Center for",
          altname: ["Center for International Studies"],
        },
        {
          url: "http://poet.mit.edu/",
          name: "Political Economy & Technology Policy",
        },
        { url: "http://web.mit.edu/ssp/", name: "Security Studies Program" },
        {
          url: "http://web.mit.edu/phrj/",
          name: "Program on Human Rights & Justice",
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (E40-196A)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09516824,
      name: "Du Pont Athletic Gymnasium",
      lat_wgs84: 42.35963776,
      id: "object-W31",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W31.jpg",
      street: "120 Massachusetts Avenue",
      bldgnum: "W31",
      altname: ["DuPont Athletic Gymnasium"],
      architect: "Hartwell Richardson & Driver",
      floorplans: ["0", "1", "2", "3"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        { name: "T-Club Lounge" },
        { url: "https://studentlife.mit.edu/hobbyshop/", name: "Hobby Shop" },
        {
          url: "http://web.mit.edu/vms/",
          name: "MIT Venture Mentoring Service",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09513369,
      name: "Du Pont Athletic Center",
      lat_wgs84: 42.35936841,
      id: "object-W32",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W32.jpg",
      street: "100 Massachusetts Avenue",
      bldgnum: "W32",
      altname: ["DuPont Athletic Center"],
      architect: "Anderson Beckwith & Haible",
      floorplans: ["0", "1", "2", "2M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
    },
  ][
    {
      category: ["building"],
      long_wgs84: -71.09505791,
      name: "Kresge Auditorium",
      lat_wgs84: 42.35813383,
      id: "object-W16",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W16.jpg",
      street: "48 Massachusetts Ave (Rear)",
      bldgnum: "W16",
      architect: "Eero Saarinen",
      floorplans: ["0", "1", "2", "2M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east side",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/cac/event-services-spaces/event-spaces/kresge-auditorium",
          name: "Paul Theater",
        },
        { category: ["room"], name: "Little Kresge" },
      ],
    }
  ],
  [][
    {
      category: ["building"],
      long_wgs84: -71.09652993,
      name: "Johnson Athletics Center",
      lat_wgs84: 42.35859572,
      id: "object-W34",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W34.jpg",
      street: "120 Vassar Street",
      bldgnum: "W34",
      altname: ["Johnson Track", "Johnson Athletic Center"],
      architect: "Davis Brody",
      floorplans: ["1", "1M", "2", "R"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "southwest corner",
      contents: [
        {
          url: "http://web.mit.edu/athletics/www/skate.htm",
          name: "Ice Rink (Seasonal)",
        },
        { name: "Motorcycle parking" },
      ],
    }
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09575044,
      name: "Zesiger Sports and Fitness Center",
      lat_wgs84: 42.35871577,
      id: "object-W35",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W35.jpg",
      street: "120 Vassar Street",
      bldgnum: "W35",
      altname: ["Z Center"],
      architect: "Sasaki Associates",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south",
      contents: [
        {
          url: "http://dining.mit.edu/venues-menus/aubonpain",
          category: ["food", "coffee"],
          name: "Au Bon Pain",
          altname: ["abp"],
        },
        {
          url: "http://web.mit.edu/athletics/",
          name: "Athletics, Physical Education and Recreation, Dept. (DAPER)",
          altname: ["Physical Education", "Sports"],
        },
        {
          url: "http://web.mit.edu/athletics/sportsmedicine/",
          name: "Sports Medicine",
          altname: ["Kasser Sports Medicine Center"],
        },
        {
          url: "http://web.mit.edu/zcenter/",
          name: "Zesiger Sports and Fitness Center",
          altname: ["Zesiger Sports and Fitness Center and Pool", "Z Center"],
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (3rd Floor)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08449242,
      name: "Tang Center",
      lat_wgs84: 42.36055421,
      id: "object-E51",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E51.jpg",
      street: "70 Memorial Drive",
      bldgnum: "E51",
      altname: ["Wong Auditorium"],
      architect: "Perry Shaw & Hepburn | Ellenzweig",
      floorplans: ["0", "1", "2", "3", "4"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "north side",
      contents: [
        { category: ["room"], name: "Wong Auditorium" },
        { category: ["room"], name: "Diebold Lounge" },
        { category: ["room"], name: "Ting Foyer" },
        { url: "http://web.mit.edu/history/www/", name: "History, Dept. of" },
        {
          url: "http://web.mit.edu/sts/",
          name: "Science, Technology, and Society (STS), Program in",
        },
        {
          url: "http://web.mit.edu/csd/",
          name:
            "The Study of Diversity in Science, Technology and Medicine (CSD), Center for",
        },
        {
          url: "http://mitsloan.mit.edu/cdo/",
          name: "MIT Sloan Career Development Office",
        },
        { url: "http://web.mit.edu/shass/soundings/", name: "Soundings" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          category: ["clusters"],
          name: "Athena Workstations (E51-075)",
          altname: ["Athena Cluster"],
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (E51 Basement)",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09477464,
      name: "Stratton Student Center",
      lat_wgs84: 42.3590424,
      id: "object-W20",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W20.jpg",
      street: "84 Massachusetts Avenue",
      bldgnum: "W20",
      architect: "Catalano Brannen Shimamoto",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "6M"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        { category: ["room"], name: "Sala de Puerto Rico" },
        { category: ["room"], name: "Lobdell Dining Hall" },
        {
          url: "http://dining.mit.edu/venues-menus/cambridge-grill",
          category: ["food"],
          name: "Cambridge Grill",
        },
        {
          url: "http://dining.mit.edu/venues-menus/laverdes",
          category: ["food", "coffee"],
          name: "La Verde's Market",
        },
        {
          url: "http://dining.mit.edu/venues-menus/annas-taqueria",
          category: ["food"],
          name: "Anna's Taqueria",
        },
        {
          url: "http://dining.mit.edu/venues-menus/cafespice",
          category: ["food"],
          name: "Cafe Spice (Lobdell Food Court)",
        },
        {
          url: "http://dining.mit.edu/venues-menus/shinkansen",
          category: ["food"],
          name: "Shinkansen Japan (Lobdell Food Court)",
        },
        {
          url: "http://dining.mit.edu/venues-menus/subway",
          category: ["food"],
          name: "Subway Restaurant (Lobdell Food Court)",
        },
        {
          url: "http://dining.mit.edu/venues-menus/dunkin-donuts",
          category: ["food", "coffee"],
          name: "Dunkin Donuts",
        },
        { name: "Technicuts" },
        { name: "New Tech Barber" },
        {
          url: "http://web.mit.edu/saa/",
          name: "Art Association, Student",
          altname: ["Student Art Association"],
        },
        {
          url: "http://web.mit.edu/asa/www/",
          name: "Association of Student Activities",
          altname: ["Student Activities, Association of"],
        },
        {
          url: "http://web.mit.edu/campus-activities/www/",
          name: "Campus Activities Complex",
          altname: ["Student Center"],
        },
        {
          url: "http://web.mit.edu/discipline",
          name: "Student Mediation and Community Standards",
          altname: ["Conflict Resolution"],
        },
        {
          url: "http://web.mit.edu/cdsa/",
          name: "Community Development and Substance Abuse",
        },
        {
          url: "http://mit.edu/thecoop",
          name: "The Coop (official MIT bookstore)",
        },
        { url: "http://web.mit.edu/ctc/www/", name: "MIT Copytech" },
        {
          url: "http://web.mit.edu/officesdir/383383.shtml",
          name: "Bank of America",
        },
        {
          url: "http://web.mit.edu/slp/fsilgs/",
          name: "Fraternities, Sororities, and Living Groups",
          altname: ["Living Groups, FSILGs"],
        },
        {
          url: "http://ifc.mit.edu/",
          name: "Interfraternity Council (IFC)",
          altname: ["Fraternity Council"],
        },
        {
          url: "http://lsc.mit.edu/",
          name: "Lecture Series Committee (LSC)",
          altname: ["Movies"],
        },
        {
          url: "http://web.mit.edu/lbgt/",
          name: "Lesbian, Bisexual, Gay, and Transgender at MIT",
        },
        {
          url:
            "http://web.mit.edu/facilities/transportation/shuttles/safe_ride.html",
          name: "SafeRide",
        },
        {
          url: "http://web.mit.edu/mitpsc/servlearn/",
          name: "Service Learning",
        },
        {
          url: "http://web.mit.edu/campus-activities/www/scheduling.html",
          name: "Space Reservations",
        },
        {
          url: "http://web.mit.edu/slp/sao/",
          name: "Student Activities Office",
        },
        {
          url: "http://www.mit.edu/sipb/sipb.html",
          name: "Student Information Processing Board (SIPB)",
        },
        { url: "http://web.mit.edu/slp/", name: "Student Life Programs" },
        {
          url: "http://web.mit.edu/yearbook/",
          name: "Technique (yearbook)",
          altname: ["Yearbook"],
        },
        {
          url: "http://www-tech.mit.edu/",
          name: "Tech, The",
          altname: ["Newspaper, Student"],
        },
        {
          url: "http://ist.mit.edu/services/athena",
          category: ["clusters"],
          name: "Athena Workstations (W20-575, W20-570)",
          altname: ["Athena Cluster"],
        },
        {
          url:
            "http://usps.whitepages.com/service/post_office/m-i-t-84-massachusetts-ave-cambridge-ma-1371288",
          name: "Post Office",
          altname: ["Mail, Post Office"],
        },
        { name: "Twenty Chimneys", altname: ["20 Chimneys"] },
        {
          url: "http://medweb.mit.edu/directory/services/optical.html",
          name: "MIT Optical (Eyeglass Store)",
        },
        {
          url: "http://latino.mit.edu/",
          name: "Latino Cultural Center (LCC) Lounge (W20-001)",
        },
        {
          url: "http://studentlife.mit.edu/pkgcenter/",
          name: "Priscilla King Gray Public Service Center (PKG Center)",
          altname: ["Community Service", "Public Service Center (PSC)"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08346319,
      name: "One Broadway",
      lat_wgs84: 42.36274923,
      id: "object-E70",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E70.jpg",
      street: "1 Broadway, (8th FL)",
      bldgnum: "E70",
      floorplans: ["8"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "west side",
      contents: [
        {
          url: "https://jwafs.mit.edu/",
          name: "Abdul Latif Jameel Water and Food Systems Lab (J-WAFS)",
        },
        {
          url: "https://environmentalsolutions.mit.edu/",
          name: "Environmental Solutions Initiative",
        },
        {
          url: "http://lfe.mit.edu/",
          name: "Laboratory for Financial Engineering",
        },
        {
          url: "http://web.mit.edu/mit-mi-cp/",
          name: "MIT and Masdar Institute Cooperative Program",
        },
        {
          url: "http://legatum.mit.edu/",
          name: "Legatum Center for Development and Entrepreneurship",
        },
        {
          url: "http://web.mit.edu/deshpandecenter/",
          name: "Deshpande Center for Technological Innovation",
        },
        {
          url: "https://innovation.mit.edu/",
          name: "MIT Innovation Initiative",
        },
        {
          url: "https://gcfp.mit.edu/",
          name: "MIT Golub Center for Finance and Policy (GCFP)",
        },
        {
          url: "http://www.mitimco.org/",
          name: "MIT Investment Management Company",
          altname: ["Investment Management Company, MIT"],
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.10664515,
      name: "Building W98",
      lat_wgs84: 42.35395541,
      street: "600 Memorial Drive",
      bldgnum: "W98",
      mailing: "77 Massachusetts Avenue",
      id: "object-W98",
      contents: [
        {
          url: "http://dining.mit.edu/venues-menus/zigo",
          category: ["coffee", "food"],
          name: "Zigo Cafe",
        },
        {
          url: "http://web.mit.edu/development/",
          name: "Resource Development",
        },
        {
          url: "http://alum.mit.edu/",
          name: "Alumni Association",
          altname: ["Parents Association"],
        },
        { url: "http://enterpriseforum.mit.edu/", name: "Enterprise Forum" },
        {
          url: "https://vpf.mit.edu/",
          name: "Office of the Recording Secretary",
        },
        {
          url:
            "http://hrweb.mit.edu/worklife/child-care-parenting/breastfeeding-support/lactation-rooms/campus",
          name: "Lactation Room (W98-414)",
        },
        { name: "Motorcycle parking" },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.08517326,
      name: "255 Main Street",
      lat_wgs84: 42.36264726,
      id: "object-NE18",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NE18.jpg",
      street: "255 Main Street",
      bldgnum: "NE18",
      floorplans: ["5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "east",
      contents: [
        {
          url: "http://web.mit.edu/tlo/www/",
          name: "Technology Licensing Office (TLO)",
          altname: ["Licensing Office, Technology"],
        },
        {
          url: "http://architecture.mit.edu/house_n/",
          name: "House_n: The MIT Home of the Future Project",
        },
        {
          url: "http://web.mit.edu/osp/www/",
          name: "Sponsored Programs, Office of (OSP)",
          altname: ["Office of Sponsored Programs"],
        },
        { url: "http://insurance.mit.edu/", name: "Insurance" },
        {
          url: "https://adminconnect.mit.edu/offices/office-major-agreements",
          name: "Office of Major Agreements",
        },
      ],
    },
  ],
  [
    {
      category: ["building"],
      long_wgs84: -71.09882964,
      name: "Building N57",
      lat_wgs84: 42.3630114,
      id: "object-N57",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-N57.jpg",
      street: "1 State Street",
      bldgnum: "N57",
      altname: ["Library Storage Annex (LSA)"],
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "77 Massachusetts Avenue",
      viewangle: "south side",
      contents: [
        {
          url: "http://libraries.mit.edu/lsa/",
          category: ["library"],
          name: "Library Storage Annex (LSA)",
        },
      ],
    },
  ],
  [
    {
      website: "http://ec.mit.edu/",
      lat_wgs84: 42.36040462,
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-64.jpg",
      street: "3 Ames Street",
      bldgnum: "64",
      id: "object-64",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/east-campus",
          name: "Undergraduate residence",
        },
        { url: "http://web.mit.edu/first-east/www/", name: "1st East" },
        { url: "http://web.mit.edu/beast/www/", name: "2nd East" },
        { url: "http://web.mit.edu/tetazoo/www/", name: "3rd East (Tetazoo)" },
        {
          url: "http://web.mit.edu/slugfest/www/",
          name: "4th East (Slugfest)",
        },
        { url: "http://web.mit.edu/florey/www/", name: "5th East" },
      ],
      category: ["building", "residence", "dormitory"],
      long_wgs84: -71.08814116,
      name: "East Campus",
      architect: "William Welles Bosworth",
      altname: [
        "East Campus: East Parallel",
        "East Campus: Walcott",
        "East Campus: Bemis",
        "East Campus: Goodale",
      ],
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "3 Ames Street",
      viewangle: "north side",
    },
  ][
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/macgregor/www/",
      long_wgs84: -71.09954663,
      name: "MacGregor House",
      lat_wgs84: 42.35546182,
      id: "object-W61",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W61.jpg",
      street: "450 Memorial Drive",
      bldgnum: "W61",
      architect: "The Architects Collaborative Inc.",
      floorplans: ["000", "00", "0", "1", "2", "3", "4", "16", "17", "18", "R"],
      mailing: "450 Memorial Drive",
      viewangle: "west side",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/macgregor-house",
          name: "Undergraduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    }
  ],
  [
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/mccormick/www/",
      long_wgs84: -71.09442302,
      name: "McCormick Hall",
      lat_wgs84: 42.357183,
      id: "object-W4",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W4.jpg",
      street: "320 Memorial Drive",
      bldgnum: "W4",
      architect: "Anderson Beckwith & Haible",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      mailing: "320 Memorial Drive",
      viewangle: "north",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/mccormick-hall",
          name: "Undergraduate residence",
        },
        {
          url: "https://studentlife.mit.edu/dining/residential-dining",
          category: ["food"],
          name: "McCormick Dining",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      website: "http://web.mit.edu/nh/www/",
      lat_wgs84: 42.35516109,
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W70.jpg",
      street: "471-476 Memorial Drive",
      bldgnum: "W70",
      id: "object-W70",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/new-house",
          name: "Undergraduate residence",
        },
        { url: "http://web.mit.edu/nh4/www/", name: "New House 4" },
        { url: "http://web.mit.edu/desmond/www/", name: "New House 5" },
        {
          url: "http://web.mit.edu/lmf/www/",
          name: "La Maison Fran&ccedil;aise",
        },
        { url: "http://web.mit.edu/ihouse/", name: "iHouse" },
        { url: "http://web.mit.edu/dh/www/", name: "Deutsches Haus" },
        { url: "http://web.mit.edu/la_casa/www/", name: "La Casa" },
        {
          url: "http://web.mit.edu/chocolate-city/www/",
          name: "Chocolate City",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      long_wgs84: -71.10053232,
      name: "New House",
      architect: "Sert Jackson & Associates",
      altname: [
        "French House",
        "La Maison Fran&ccedil;aise",
        "iHouse",
        "German House",
        "Deutsches Haus",
        "Spanish House",
        "La Casa",
        "Chocolate City",
      ],
      floorplans: ["1", "2", "3", "4", "5", "6"],
      mailing: "471-476 Memorial Drive",
      viewangle: "north side",
    },
  ][
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/next/www/",
      long_wgs84: -71.10192118,
      name: "Next House",
      lat_wgs84: 42.35470475,
      id: "object-W71",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W71.jpg",
      street: "500 Memorial Drive",
      bldgnum: "W71",
      architect: "Sert Jackson & Associates",
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "500 Memorial Drive",
      viewangle: "northeast corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/next-house",
          name: "Undergraduate residence",
        },
        {
          url: "https://studentlife.mit.edu/dining/residential-dining",
          category: ["food"],
          name: "Next House Dining",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    }
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://web.mit.edu/random-hall/www/",
      long_wgs84: -71.0982858,
      name: "Random Hall",
      lat_wgs84: 42.36184456,
      id: "object-NW61",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW61.jpg",
      street: "282-290 Massachusetts Avenue",
      bldgnum: "NW61",
      floorplans: ["0", "1", "2", "3", "4"],
      mailing: "282-290 Massachusetts Avenue",
      viewangle: "northeast",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/random-hall",
          name: "Undergraduate residence",
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website:
        "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/70-amherst-street",
      long_wgs84: -71.08686701,
      name: "70 Amherst Street",
      lat_wgs84: 42.35995565,
      id: "object-E2",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-E2.jpg",
      street: "4 Ames Street",
      bldgnum: "E2",
      architect: "William Welles Bosworth",
      floorplans: ["0", "1", "2", "3", "4", "5", "6"],
      mailing: "70 Amherst Street",
      viewangle: "west side",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/70-amherst-street",
          name: "Graduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstation (E2-112)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://web.mit.edu/baker/www/",
      long_wgs84: -71.09579218,
      name: "Baker House",
      lat_wgs84: 42.35669783,
      id: "object-W7",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W7.jpg",
      street: "362 Memorial Drive",
      bldgnum: "W7",
      architect: "Alvar Aalto",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "362 Memorial Drive",
      viewangle: "north side",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/baker-house",
          name: "Undergraduate residence",
        },
        {
          url: "https://studentlife.mit.edu/dining/residential-dining",
          category: ["food"],
          name: "Baker Dining",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/burton-conner/www/",
      long_wgs84: -71.09812434,
      name: "Burton-Conner House",
      lat_wgs84: 42.35596941,
      id: "object-W51",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W51.jpg",
      street: "410 Memorial Drive",
      bldgnum: "W51",
      architect: "C. Albright",
      floorplans: ["0", "1", "2", "3", "4", "5", "6"],
      mailing: "410 Memorial Drive",
      viewangle: "northeast corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/burton-conner",
          name: "Undergraduate residence",
        },
        { url: "http://web.mit.edu/burton1/www/", name: "Burton 1" },
        { url: "http://web.mit.edu/burton2/www/", name: "Burton 2" },
        {
          url: "http://web.mit.edu/bombers/www/",
          name: "Burton Third Bombers",
        },
        { url: "http://web.mit.edu/burton4/www/", name: "Burton 4" },
        { url: "http://web.mit.edu/burton5/www/", name: "Burton 5" },
        { url: "http://web.mit.edu/conner2/www/", name: "Conner 2" },
        { url: "http://web.mit.edu/conner3/www/", name: "Conner 3" },
        { url: "http://web.mit.edu/conner4/www/", name: "Conner 4" },
        { url: "http://web.mit.edu/conner5/www/", name: "Conner 5" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      website: "http://ec.mit.edu/",
      lat_wgs84: 42.3602292,
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-62.jpg",
      street: "3 Ames Street (Rear)",
      bldgnum: "62",
      id: "object-62",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/east-campus",
          name: "Undergraduate residence",
        },
        {
          url: "http://web.mit.edu/stickmen/www/",
          name: "1st West (Stickmen)",
        },
        {
          url: "http://web.mit.edu/2ndwest/www/",
          name: "2nd West (Pi Tau Zeta)",
        },
        { url: "http://web.mit.edu/thirdwest/www/", name: "3rd West" },
        { url: "http://www.mit.edu/activities/41West/", name: "41st West" },
        { url: "http://web.mit.edu/activities/5west/", name: "5th West" },
        { name: "Talbot Lounge" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstation",
          altname: ["Athena Cluster"],
        },
      ],
      category: ["building", "residence", "dormitory", "Eastgate Parking Area"],
      long_wgs84: -71.0886829,
      name: "East Campus",
      architect: "Coolidge & Carlson",
      altname: [
        "East Campus: West Parallel",
        "East Campus: Munroe",
        "East Campus: Hayden",
        "East Campus: Wood",
      ],
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "3 Ames Street (Rear)",
      viewangle: "northwest corner",
    },
  ][
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/greenhall/www/",
      long_wgs84: -71.09510104,
      name: "Green Hall",
      lat_wgs84: 42.35691893,
      id: "object-W5",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W5.jpg",
      street: "350 Memorial Drive",
      bldgnum: "W5",
      architect: "C. H. Bartlett",
      floorplans: ["0", "1", "2", "3", "4"],
      mailing: "350 Memorial Drive",
      viewangle: "north",
      contents: [{ url: "http://theta.mit.edu/", name: "Kappa Alpha Theta" }],
    }
  ],
  [
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://housing.mit.edu/node/5476",
      long_wgs84: -71.0935107,
      name: "Fariborz Maseeh Hall",
      lat_wgs84: 42.35761763,
      id: "object-W1",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W1.jpg",
      street: "305 Memorial Drive",
      bldgnum: "W1",
      architect: "H.B. Ball",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "305 Memorial Drive",
      viewangle: "south",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/maseeh-hall",
          name: "Undergraduate residence",
        },
        {
          url: "https://studentlife.mit.edu/dining/residential-dining",
          name: "The Flowers Dining Hall at Maseeh Hall",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://web.mit.edu/thra/www/",
      long_wgs84: -71.10347949,
      name: "Tang Hall",
      lat_wgs84: 42.35435175,
      id: "object-W84",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W84.jpg",
      street: "550 Memorial Drive",
      bldgnum: "W84",
      architect: "Hugh Stubbins Associates",
      floorplans: [
        "00",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
      ],
      mailing: "550 Memorial Drive",
      viewangle: "northeast corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/tang-hall",
          name: "Graduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://eh.mit.edu/",
      long_wgs84: -71.09813657,
      name: "Edgerton House",
      lat_wgs84: 42.36031898,
      id: "object-NW10",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW10.jpg",
      street: "143 Albany Street",
      bldgnum: "NW10",
      floorplans: ["0", "1", "2", "3", "4"],
      mailing: "143 Albany Street",
      viewangle: "south",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/edgerton-house",
          name: "Graduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/burton-conner/www/",
      long_wgs84: -71.09812434,
      name: "Burton-Conner House",
      lat_wgs84: 42.35596941,
      id: "object-W51",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W51.jpg",
      street: "410 Memorial Drive",
      bldgnum: "W51",
      architect: "C. Albright",
      floorplans: ["0", "1", "2", "3", "4", "5", "6"],
      mailing: "410 Memorial Drive",
      viewangle: "northeast corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/burton-conner",
          name: "Undergraduate residence",
        },
        { url: "http://web.mit.edu/burton1/www/", name: "Burton 1" },
        { url: "http://web.mit.edu/burton2/www/", name: "Burton 2" },
        {
          url: "http://web.mit.edu/bombers/www/",
          name: "Burton Third Bombers",
        },
        { url: "http://web.mit.edu/burton4/www/", name: "Burton 4" },
        { url: "http://web.mit.edu/burton5/www/", name: "Burton 5" },
        { url: "http://web.mit.edu/conner2/www/", name: "Conner 2" },
        { url: "http://web.mit.edu/conner3/www/", name: "Conner 3" },
        { url: "http://web.mit.edu/conner4/www/", name: "Conner 4" },
        { url: "http://web.mit.edu/conner5/www/", name: "Conner 5" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      website: "http://ec.mit.edu/",
      lat_wgs84: 42.3602292,
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-62.jpg",
      street: "3 Ames Street (Rear)",
      bldgnum: "62",
      id: "object-62",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/east-campus",
          name: "Undergraduate residence",
        },
        {
          url: "http://web.mit.edu/stickmen/www/",
          name: "1st West (Stickmen)",
        },
        {
          url: "http://web.mit.edu/2ndwest/www/",
          name: "2nd West (Pi Tau Zeta)",
        },
        { url: "http://web.mit.edu/thirdwest/www/", name: "3rd West" },
        { url: "http://www.mit.edu/activities/41West/", name: "41st West" },
        { url: "http://web.mit.edu/activities/5west/", name: "5th West" },
        { name: "Talbot Lounge" },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstation",
          altname: ["Athena Cluster"],
        },
      ],
      category: ["building", "residence", "dormitory", "Eastgate Parking Area"],
      long_wgs84: -71.0886829,
      name: "East Campus",
      architect: "Coolidge & Carlson",
      altname: [
        "East Campus: West Parallel",
        "East Campus: Munroe",
        "East Campus: Hayden",
        "East Campus: Wood",
      ],
      floorplans: ["0", "1", "2", "3", "4", "5"],
      mailing: "3 Ames Street (Rear)",
      viewangle: "northwest corner",
    },
  ][
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://web.mit.edu/greenhall/www/",
      long_wgs84: -71.09510104,
      name: "Green Hall",
      lat_wgs84: 42.35691893,
      id: "object-W5",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W5.jpg",
      street: "350 Memorial Drive",
      bldgnum: "W5",
      architect: "C. H. Bartlett",
      floorplans: ["0", "1", "2", "3", "4"],
      mailing: "350 Memorial Drive",
      viewangle: "north",
      contents: [{ url: "http://theta.mit.edu/", name: "Kappa Alpha Theta" }],
    }
  ],
  [
    {
      category: ["building", "residence", "dormitory", "Amherst Parking Area"],
      website: "http://housing.mit.edu/node/5476",
      long_wgs84: -71.0935107,
      name: "Fariborz Maseeh Hall",
      lat_wgs84: 42.35761763,
      id: "object-W1",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W1.jpg",
      street: "305 Memorial Drive",
      bldgnum: "W1",
      architect: "H.B. Ball",
      floorplans: ["0", "1", "2", "3", "4", "5", "6", "7"],
      mailing: "305 Memorial Drive",
      viewangle: "south",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/undergraduate-housing/residence-halls/maseeh-hall",
          name: "Undergraduate residence",
        },
        {
          url: "https://studentlife.mit.edu/dining/residential-dining",
          name: "The Flowers Dining Hall at Maseeh Hall",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://web.mit.edu/thra/www/",
      long_wgs84: -71.10347949,
      name: "Tang Hall",
      lat_wgs84: 42.35435175,
      id: "object-W84",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-W84.jpg",
      street: "550 Memorial Drive",
      bldgnum: "W84",
      architect: "Hugh Stubbins Associates",
      floorplans: [
        "00",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
      ],
      mailing: "550 Memorial Drive",
      viewangle: "northeast corner",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/tang-hall",
          name: "Graduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
  [
    {
      category: ["building", "residence", "dormitory"],
      website: "http://eh.mit.edu/",
      long_wgs84: -71.09813657,
      name: "Edgerton House",
      lat_wgs84: 42.36031898,
      id: "object-NW10",
      bldgimg: "http://web.mit.edu/campus-map/objimgs/object-NW10.jpg",
      street: "143 Albany Street",
      bldgnum: "NW10",
      floorplans: ["0", "1", "2", "3", "4"],
      mailing: "143 Albany Street",
      viewangle: "south",
      contents: [
        {
          url:
            "https://studentlife.mit.edu/housing/graduate-family-housing/graduate-residences/edgerton-house",
          name: "Graduate residence",
        },
        {
          url: "http://ist.mit.edu/athena/clusters",
          name: "Athena Workstations (Basement)",
          altname: ["Athena Cluster"],
        },
      ],
    },
  ],
];
module.exports = buildings;
