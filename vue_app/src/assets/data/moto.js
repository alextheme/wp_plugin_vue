// export default [
//     'Adler',
//     'AEON',
//     'AERMACCHI',
//     'AJP',
//     'AJS',
//     'ALTA MOTORS',
//     'AMAZONAS',
//     'APRILIA',
//     'ARCTIC CAT',
//     'ARIEL',
//     'ATK',
//     'BAJAJ',
//     'BARIGO',
//     'BENELLI',
//     'BETA',
//     'BFG',
//     'Big Bear Choppers',
//     'Big Dog',
//     'BIMOTA',
//     // 'BMW',
//     'BORILE',
//     'BOSS HOSS',
//     'BRITTEN',
//     'BROUGH SUPERIOR',
//     'BSA',
//     'BUELL',
//     'CAGIVA',
//     'CAN-AM/ BRP',
//     'CANNONDALE',
//     'CARVER',
//     'CCM',
//     'CEMEC',
//     'CFMOTO',
//     'CHAK MOTORS',
//     'Christini',
//     'CONDOR',
//     'CONFEDERATE',
//     'CPI',
//     'CRS',
//     'DAELIM',
//     'Dafra Motos',
//     'DERBI',
//     'DNEPR',
//     // 'DUCATI',
//     'EBR Motorcycles',
//     'ECOSSE',
//     'ENERGICA',
//     'EXCELSIOR',
//     'FISCHER',
//     'GAS GAS',
//     'GEELY',
//     'GG MOTORRAD',
//     'GHEZZI-BRIAN',
//     'GILERA',
//     // 'HARLEY-DAVIDSON',
//     'HARTFORD',
//     'HENDERSON',
//     'HERCULES',
//     'HERO',
//     'HESKETH',
//     'HIGHLAND',
//     'HODAKA',
//     // 'HONDA',
//     'HOREX',
//     'HUSABERG',
//     'HUSQVARNA',
//     'HYOSUNG',
//     'INDIAN',
//     'ITALJET',
//     'IZH',
//     'JAWA',
//     'JUNAK',
//     'KANUNI',
//     'KASINSKI',
//     // 'KAWASAKI',
//     'KTM',
//     'KYMCO',
//     'LAVERDA',
//     'LEHMAN TRIKES',
//     'LIFAN',
//     'LINHAI',
//     'MAGNI',
//     'MAICO',
//     'MALAGUTI',
//     'MARUSHO-LILAC',
//     'MASH',
//     'MATCHLESS',
//     'MBK',
//     'MEGELLI',
//     'MIDUAL',
//     'MIKILON',
//     'MODENAS',
//     'MONDIAL',
//     'MOTO GUZZI',
//     'MOTO MORINI',
//     'MOTOCZYSZ',
//     'MOTORHISPANIA',
//     'MOTUS',
//     'MTT',
//     'MUNCH',
//     'MV AGUSTA',
//     'MZ',
//     'NCR',
//     'NORTON',
//     'Orange County Choppers',
//     'OSSA',
//     'PETRONAS',
//     'PEUGEOT',
//     'PGO',
//     'PIAGGIO',
//     'POLARIS',
//     'PUCH',
//     'RIEJU MOTORS',
//     'ROYAL ENFIELD',
//     'SACHS',
//     'SCORPA',
//     'SHERCO',
//     'SIMSON',
//     // 'SUZUKI',
//     'SWM',
//     'SYM',
//     'TGB',
//     // 'TRIUMPH Motorcycle',
//     'URAL',
//     'VELOCETTE',
//     'VENTO',
//     'VERUCCI',
//     'VESPA',
//     'VICTORY',
//     'VINCENT HRD',
//     'VOR',
//     'VOXAN',
//     'VYRUS',
//     'WAKAN',
//     'WHIZZER',
//     'WRM',
//     // 'YAMAHA',
//     'ZERO',
//     'ZUNDAPP',
// ]

const motorcycleCheckbox = ['Harley-Davidson', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'BMW', 'Ducati', 'Triumph Motorcycle']
const motorcycleDatabase = [
    {"make":"Adler","models":["Favorit","ISDT","Junior","M","MB"]},
    {"make":"AEON","models":["COBRA","Crossland","Cube","Minikolt","OVERLAND","Sporty"]},
    {"make":"AERMACCHI","models":["350SS","Ala D'Oro","Ala Verde","Brezza","Chimera","RC 125","Sprint 250","Zeffiro"]},
    {"make":"AJP","models":["Galp","PR"]},
    {"make":"AJS","models":["A9","Bobber","CADWELL","Daytona","DD","Digita","E95","Eco","EOS","Firefox","H6","JSM","Model","Modena","NAC","R7","Silver Streak","Sorvio","TN","V-4"]},
    {"make":"ALTA MOTORS","models":["REDSHIFT MX","REDSHIFT SM"]},
    {"make":"AMAZONAS","models":["1600"]},
    {"make":"APRILIA","models":["AF1","AS","Atlantic","Blue Marlin","Caponord","Classic","Dorsoduro","ETV Mana","Europa","Leonardo","Mana","Mojito","Moto 6.5","MX","MXV","RC","Red Rose","RS","RSV","RX","RXV","Scarabeo","Shiver","SL","Sportcity","SR","SRV","ST","STX","SX","SXV","Tuareg","Tuono","TX"]},
    {"make":"ARCTIC CAT","models":["1000","250","300","350","366","400","425","450","50","500","550","650","700","90","ALTERRA","DVX","DVX250","DVX400","DVX90","MUDPRO","Prowler","TBX","Wildcat","XC"]},
    {"make":"ARIEL","models":["ACE","Arrow","FH","HT3","HT5","Huntmaster","KH","Leader","LH","NH","NH Hunter","Square Four","VB","VH","W/NG"]},
    {"make":"ATK","models":["125","250","450","450 MX","500","600","605","700","GT","GV"]},
    {"make":"BAJAJ","models":["AVENGER","CHETAK","CT","DISCOVER","PLATINA","PULSAR","WIND","XCD"]},
    {"make":"BARIGO","models":["500 RCB","600 SM","MAGIE NOIRE","Onixa","Supermotard","Tonic"]},
    {"make":"BENELLI","models":["125","175","250","254 Quattro","304","350 RS","354","500","500 LS","504","650","654","900","BN","BX","Caffenero","Due","Leoncino","Macis","Mojave","Pepe","Quattronove","QuattroNove X","Sport","TNT","Tornado","Tre","Tre-K","TRK","Uno","Zenzero"]},
    {"make":"BETA","models":["Alp 4.0","Ark Air Cooled 50","Ark Liquid Cooled 50","Euro 350 Cruiser","Evo","Jonathan 350","M4","Minicross R-12\"","RR","RR 250","RR-S","RS","TR 35/260","Urban","XTRAINER"]},
    {"make":"BFG","models":["1300"]},
    {"make":"Big Bear Choppers","models":["Athena","Bear Bones","Devil's Advocate","GTX","Merc","Miss Behavin","Paradox","Rage","Reaper","Redemption","Screamin Demon","The Sled","Titanium","Venom"]},
    {"make":"Big Dog","models":["Boxer","Bulldog","Chopper","Coyote","K9","Mastiff","Mutt","Pitbull","Ridgeback","Wolf","Working Man's Special"]},
    {"make":"BIMOTA","models":["500","666","BB","DB","HB","KB","SB","Tesi","YB"]},
    {"make":"BMW","models":["C","F 650","F 700","F 800","Flink","G","G 450","GS","HP","K","K 1","K 100","K 1100","K 1200","K 1300","K 1600","K 75","Krauser MKM 1000","R","R 100","R 1100","R 1150","R 1200","R 45","R 65","R 80","R 850","R 900","R nineT","S 1000"]},
    {"make":"BORILE","models":["B 300","B 450","B 500","B 500 MT","B 651","Bastard"]},
    {"make":"BOSS HOSS","models":["BHC-3 502","BHC-3 ZZ4 SS","BHC-9 ZZ4"]},
    {"make":"BRITTEN","models":["V1000"]},
    {"make":"BROUGH SUPERIOR","models":["SS100","SS680","SS80"]},
    {"make":"BSA","models":["A","B","Beagle","Bluestar","C","DB","Flat Tank","G","M","X","Y"]},
    {"make":"BUELL","models":["1125","Blast","M2 Cyclone","RR","RS","RSS","S1","S2","S3","X1","XB"]},
    {"make":"CAGIVA","models":["Alazzurra","Aletta Oro","Canyon","Cruiser","Custom","Elefant","Freccia","Gran Canyon","Mito","Navigator","Raptor","River","Roadster","RX","SST","Super City","SXT","T4","V-Raptor","W"]},
    {"make":"CAN-AM/ BRP","models":["250 Road Racer","Commander","DS","GP 250","Maverick","MX-1","Outlander","OUTLANDER 400","OUTLANDER 650","OUTLANDER 800","Rally","Renegade","Sarasota","Spyder","Traxter"]},
    {"make":"CANNONDALE","models":["C 440 R","Cannibal","E 440","FX400"]},
    {"make":"CARVER","models":["ONE"]},
    {"make":"CCM","models":["644 Dual Sport Trail","C-R","DS","FT","GP","R","RL","RS","SM","SR","TL","XTR"]},
    {"make":"CEMEC","models":["L7"]},
    {"make":"CFMOTO","models":["CFORCE","UFORCE","ZFORCE"]},
    {"make":"CHAK MOTORS","models":["MOLOT"]},
    {"make":"Christini","models":["AWD","Military"]},
    {"make":"CONDOR","models":["A580","Racer"]},
    {"make":"CONFEDERATE","models":["FIGHTER","HELLCAT F131","WRAITH B120","WRAITH B91"]},
    {"make":"CPI","models":["ARAGON","POPCORN","SM"]},
    {"make":"CRS","models":["650 VUN"]},
    {"make":"DAELIM","models":["A-FOUR","CBX","CITI ACE 110","CORDI","DAYSTAR","ET 250","HISTORY/forte","NS 125 DLX","ROADSPORT","Roadwin","S-Five","S1","S2 250/125","STEEZER","VC","VL","VR","VT"]},
    {"make":"Dafra Motos","models":["Apache","Cityclass","Citycom","Horizon","Kansas","Maxsym","Next","Riva","Roadwin","Smart","Speed","Super","Zig"]},
    {"make":"DERBI","models":["Atlantis","Boulevard","Cross City","DFW 50","DXR","GP","GPR","Mulhacen","Senda","Terra"]},
    {"make":"DNEPR","models":["K 650","K-750 M","M-72H","MT 10","MT 11","MT-10/36","MT-9","MW750"]},
    {"make":"DUCATI","models":["100","1198","125","160","175","200","250","350","400","450","48","50","500","55","60","600","620","65","748","749","80","85","888","900","916","98","996","998","999","APOLLO","BRIO","BRISK","CRUISER","Cucciolo","DESMO","Desmosedici RR","Diavel","Elite","GT","Hypermotard","Hyperstrada","MACH","MARK","Mille","Monster","Multistrada","Panigale","Pantah","Paso","Paul Smart","PIUMA","SCRAMBLER","SILURO","Sport","ST","Streetfighter","Supermono","SUPERSPORT","TT"]},
    {"make":"EBR Motorcycles","models":["RR","RS","RX","SX"]},
    {"make":"ECOSSE","models":["Heretic"]},
    {"make":"ENERGICA","models":["EGO","EVA"]},
    {"make":"EXCELSIOR","models":["20R","Manxman","Super X"]},
    {"make":"FISCHER","models":["MRX 650"]},
    {"make":"GAS GAS","models":["E-KIDS","EC","Pampera","SM","TXT"]},
    {"make":"GEELY","models":["JL 150 - 2","JL 150 - 4","JL 50QT 16","JL 50QT 21","JL 50QT-2A","JL 50QT-2B","JL100T","JL125T-5A","JL150-13","JL150-9","JL150T","JL150T-5","JL150T-6","L150T-2"]},
    {"make":"GG MOTORRAD","models":["GG-Cruso","GG-Quad","GG-Spartaco"]},
    {"make":"GHEZZI-BRIAN","models":["FIONDA","FOLGORE","Furia","KIMERA","SUPERTWIN 1100"]},
    {"make":"GILERA","models":["200","300","600","Apache","Coguar","Crono","CX","DNA","ER","Fastbike","Freestyle","GFR","Giubileo","GP","KK","MX","Nexus","NGR","Nordcape","Nordwest","RC","RRT Nebraska","RTX","RV","RX","Saturno","SP","T4","XR"]},
    {"make":"Harley-Davidson","models":["CLE","CVO","Dyna","Electra Glide","Fire/Rescue","Firefighter","FL","FREEWHEELER","Hummer","IRON","Nova","Peace Officer","Police","Road Glide","Road King","S","Scat","Shrine","Softail","Sport Glide","Sportster","Sportster Streamliner","Sprint","SST","Street","SX","Topper","Tour Glide","Trike","Ultra","VR 1000","VRSC","XLCR","XR"]},
    {"make":"HARTFORD","models":["BUMBLE","CHEETAH","FALCON","LEOPARD","NEKO","NIGHT HAWK","SIRIUS"]},
    {"make":"HENDERSON","models":["ACE","ACE XP4","DeLuxe","Henderson Four","Streamline"]},
    {"make":"HERCULES","models":["K 105 X","K 125 Military","W 2000"]},
    {"make":"HERO","models":[]},
    {"make":"HESKETH","models":["V 1000","VAMPIRE","VORTAN"]},
    {"make":"HIGHLAND","models":["450 MX","ALLROAD","DESERT STORM","DIRT-TRACK","OUTBACK","SUPERMOTARD 950"]},
    {"make":"HODAKA","models":["ACE 100","DIRT SQUIRT","SUPER RAT","WOMBAT"]},
    {"make":"HONDA","models":["ATC","AX","Big Red","Big Ruckus","C","CA","CBF","CBR","CBX","CD","CG","CHF","CJ","CL","CLR","CM","CN 250","CR","CRF","CRF250X","CRM","Crossrunner","Crosstourer","CS","CT","CTX","CX","DN-01","Dream 50 R","EVO6","F6B","FMX 650","Forza","FourTrax","FourTrax Foreman 4x4","FourTrax Foreman Rubicon","FourTrax Rincon","FT","FTR","Fury","FX","GB Clubman","Giorno","GL","GL1800C","GLX","GOLD WING","Grom","INTERSTATE","LS 125 R","MB5","Metropolitan","MRX","MSX","MTX","MVX","Navi","NC","NM4","NR 750","NS","NSC","NSF100","NSR","NT","NX","PC 800 Pacific Coast","PCX","PIONEER","RC","Rebel","RUCKUS","RVF","Scooters","SH 150i","Shadow","Silver Wing","SL","ST","Steed 400","Super 90","T","TRX","Valkyrie","VF","VFR","VRX 400 Roadster","VT","VTR","VTX","X-ADV","X-Eleven","X4","XBR 500","XL","XR"]},
    {"make":"HOREX","models":["1400 TI","Columbus","Imperator","REGINA","VR6"]},
    {"make":"HUSABERG","models":["FE","FE550e","FS","FS550e","FX","TE"]},
    {"make":"HUSQVARNA","models":["400","701","CR","CR 125","CR 65","CROSS","ENDURO","FC","FE","FR","FS","Nuda","SM","SMR","SMS","TC","TE","TR 650","TX","TXC","WR","WRE"]},
    {"make":"HYOSUNG","models":["Aquila","Exceed","GD","GF","GT","GV","KR","MS","Prima","Rally","RT","Rush","RX","Sense","ST","SuperCab","WOW","XRX"]},
    {"make":"INDIAN","models":["Army","Camelback","CHIEF","Chieftain","Dakota","Four","Light Twin","ME","Roadmaster","Scout","Spirit","SPRINGFIELD","Velo"]},
    {"make":"ITALJET","models":["CAFE RACER","Dragster","Formula","Grifon 650","Grifon 900","Jet Set","Jupiter","Millennium","Torpedo","VELOCIFERO"]},
    {"make":"IZH","models":["350","49","56","Planeta 5"]},
    {"make":"JAWA","models":["125","250","350","50","500","650","660"]},
    {"make":"JUNAK","models":["B20","M07","M07-R","M10","M11","M16","M20","M25","NK","S","WB"]},
    {"make":"KANUNI","models":["ATV","Bobcat","Breton","Buffalo","Caracal","Cheetah 125","Cross","Deer","Elite","Enduro","Freedom","Hussar","Minibike","Motocar","Motorun","Rabbit","Racer","Rokko","Seyhan","Speedy","Storm","Tiger 250","Tigrina 100","Trex","Windy","Zebra"]},
    {"make":"KASINSKI","models":["COMET","CRZ","MIRAGE","SOFT","WIN"]},
    {"make":"KAWASAKI","models":["Balius","Bayou","BJ","Brute Force","Eliminator","EN","ER","ER 5","ER-6f","ER-6n","EX 400R","GPX","GPZ","GTR","GTR 1400","H","J","KDX","KE 125","KFX","KL","KLE 500","KLR 650","KLX","KLX 110","KVF","KX","KX 250 F","KX 85","Mule","Ninja","Ninja ZX-10R","Ninja ZX-12R","Ninja ZX-9R","Prairie","Teryx","Triple","VERSYS","VN 900","Vulcan","Vulcan 900 Classic","W 650","W 800","Z","Z 1000","Zephyr","ZR","ZR-X","ZX-R","ZZR"]},
    {"make":"KTM","models":["125","350","450","50","525","625","640","660","690 Supermoto","85 SX 17/14","85 SX 19/16","950","990","ADVENTURE","ATV","Duke","ENDURO","EXC","FREERIDE","LC4 690 Baja","RC","SMC","SMR","Stunt","SuperDuke","SX","XC-W"]},
    {"make":"KYMCO","models":["Active","Agility","Bet & Win","Candy","CK 125","Compagno","Cruiser 125","Dink","DJS","Downtown","Frost","Grandvista","Heroism","Hipster 125","Jetix","Jockey","K-Pipe","K-XCT","Like","Maxxer","Mongoose","Movie","Movie XL","MXU","Myroad 700i","People","Pulsar","Quannon","Racing King","Sento","Sting","Stryker","Super 8","Super 9 / Sport 50","UXV","Venox 250","Visar","Vitality 50","Xciting","Yager","Yup","Zing","ZX 50"]},
    {"make":"LAVERDA","models":["1000","1200","125","125 GS Lesmo","250","350","500","500 Alpino","600","650","668","750","750 GT","Montjuic","SFC 1000","V6"]},
    {"make":"LEHMAN TRIKES","models":["CROSSBOW","JACKAL","MONARCH II","PITBOSS","RENEGADE","SPORTSTER"]},
    {"make":"LIFAN","models":["CHIMP","CUB","Delta","ELITE","GOLDFISH","HUNTAWAY","LF"]},
    {"make":"LINHAI","models":["CUV 300","Joker 50","Muddy LC7 Racing","Worker 300"]},
    {"make":"MAGNI","models":["Australia","Giaponne 52","Sfida","Sport 1200 S"]},
    {"make":"MAICO","models":["320 Enduro","500 Cross","ENDURO","GS 250","M 125","Maicomobil","SUPERMOTO","Taifun"]},
    {"make":"MALAGUTI","models":["BLOG","CIAK MASTER","GRIZZLY","MADISON","SPIDERMAX","X3M"]},
    {"make":"MARUSHO-LILAC","models":["JF-2 Baby Lilac","ML","SW Lancer","TW Dragon"]},
    {"make":"MASH","models":["ADVENTURE","CAFE RACER","FIVE HUNDRED","SCRAMBLER"]},
    {"make":"MATCHLESS","models":["G","Silver Hawk","X"]},
    {"make":"MBK","models":["Booster","Flame X","Flipper","MachG","Motobecane","Nitro","Ovetto","Skycruiser 125","Stunt Naked","X-Limit Supermotard"]},
    {"make":"MEGELLI","models":["MOTARD","NAKED","SPORT"]},
    {"make":"MIDUAL","models":["Roadster 900","TYPE 1"]},
    {"make":"MIKILON","models":["A6","CD","D","GT","PENTORA"]},
    {"make":"MODENAS","models":["ACE","CERIA","CT","CTRIC","DINAMIK","EFI","ELEGAN","GT","JAGUH","KARISMA","KRISS"]},
    {"make":"MONDIAL","models":["AGGRESIVE","ARDOUR","BUFFALO","Cup 100 MFH","EVO","GOMAX","HIPSTER","HYENA","JETMAX","KT","LOYAL","MASH","MC","MG","MH","MR","MX","NT","Nuda","PIEGA","Piega 1000","RT","SFC","SMT","TERRA LANDER","UGK","X-TREME","ZNU","ZNX"]},
    {"make":"MOTO GUZZI","models":["1000SP","250TS","254","750S","850T","850T3","Airone","Audace","Bellagio 940","Breva","California","Cardellino","Daytona 1000","Dondolino","Eldorado","Falcone","Galetto","Griso","GT","GTS","Le Mans","Lodola","MGS-01 Corsa","MGX","Motoleggera 65","Nevada","Norge","Norge 850","Normale","NTX","P 250","Quota","Sport","Stelvio","Stornello","Super Alce","Targa 750","V","V 10 Centauro","V 11","V 35","V 50","V 65","V 7","V1000","V11 Coppa Italia","V8","V9","Zigolo"]},
    {"make":"MOTO MORINI","models":["1200 Sport","125","175","250 T","3 1/2 S","3 1/2 Touring","350 Excalibur","350 K 2","500 Camel","500 GT","500 Sei-V","500 Turbo","501 XE","9 1/2","Coguaro","Corsarino","CORSARO","Corsaro 1200","Corsaro Country 125","Corsaro Gran Turismo","Corsaro Veloce","Dart 350","Granpasso 1200","NEW YORK","Sbarazzino","Scrambler"]},
    {"make":"MOTOCZYSZ","models":["E1"]},
    {"make":"MOTORHISPANIA","models":["ARENA 125","DUNA","FURIA","FURIA MAX ENDURO","KN","MH","NK3","RANGER","RX","RX SUPER RACING","RYZ","STREET"]},
    {"make":"MOTUS","models":["MST","MSTR"]},
    {"make":"MTT","models":["Y2K"]},
    {"make":"MUNCH","models":["MAMUTH 2000","MAMUTH 4TTS"]},
    {"make":"MV AGUSTA","models":["1000","1000 S Corona","1100","125","125 g.t.l.s.","125 Monoalbero Corsa","150 RS","175","175 Monoalbero","250","350","350 GT","350 S Ipotesi","350 Scrambler","500","600","750","750 F4 AGO","750 GT","750 S America","800","832 Monza","850 MAGNI","98","Brutale","DRAGSTER","F3","F4","F4 1000","F4 1000 SENNA","F4 750","F4 AGO","Rivale","Stradale","Turismo"]},
    {"make":"MZ","models":["1000","1000S","500","Baghira","ETS","ETZ","Mastiff","Moskito","RS","RT","Saxon","Skorpion","SM","SX","TS"]},
    {"make":"NCR","models":["848","LEGGERA","M16","M4","Macchia Nera","Millona","New Blue"]},
    {"make":"NORTON","models":["Atlas 750","Commander","Commando","DOMINATOR","F 1","Interpol 2 Classic","NRV","RC588"]},
    {"make":"Orange County Choppers","models":[]},
    {"make":"OSSA","models":["125","150 Commercial","160","Copa 250 79","E-71","EXPLORER","FACTORY","Ossita 50","Stiletto","Super Pioneer 250","TR","Urbe"]},
    {"make":"PETRONAS","models":["FP1"]},
    {"make":"PEUGEOT","models":["BLASTER","Elyseo","Elystar","Geopolis","Looxor","Ludix","PEUGEOT","Satelis","Speedfight","V-Clic","Vivacity","VOGS2","XP6","XR6"]},
    {"make":"PGO","models":["B1","B2","BIG MAX","BUBU","EVO G-MAX","G-MAX"]},
    {"make":"PIAGGIO","models":["BV","Fly 50/150","MP3","Typhoon","X10","X9","Zip 50"]},
    {"make":"POLARIS","models":["700 EFI","700 TWIN","Brutus","Hawkeye 4X4","Limited Editions","Magnum 330","Outlaw","Phoenix 200","Ranger","RZR","Sawtooth","Scrambler","Scrambler 500","SLINGSHOT","Sportsman","Trail Blazer","Trail Boss","Youth"]},
    {"make":"PUCH","models":[]},
    {"make":"RIEJU MOTORS","models":["175","City Line","Confort 400","Jaca","Marathon","MRT","MRX","NKD","Rieju No.1","RR","RS","RS2","RS3","SMX","Spike","Tango","Urban Blast"]},
    {"make":"ROYAL ENFIELD","models":["BULLET","CLASSIC","Clubman 500 GT","ELECTRA","GT","THUNDERBIRD"]},
    {"make":"SACHS","models":["B-805","Beast 1000","Bee","MadAss","Roadster","Speedforce","X-Road","XTC","ZX","ZZ"]},
    {"make":"SCORPA","models":["SY 250","SY 250 LONG RIDE","TY-S 125 F"]},
    {"make":"SHERCO","models":["4.5i","5.1i","E-KID","SE","SEF","SM","ST","X-RIDE","XY"]},
    {"make":"SIMSON","models":["AWO 425 S","BSW 98","S 51","Schwalbe","SR"]},
    {"make":"SUZUKI","models":["B 120","Bandit","Biplane","Boost King","Boulevard","Boulevard C50","Boulevard M95","Burgman","Crosscage","DR","DR 200","DR-Z","Eiger","G-Strider","GF 250","Gladius","GN","GP 125","GR 650","GS","GSR","GSR 600","GSX-F","GSX-R","GSX-S","GT","GV 1400 Cavalcade GT","GW","GZ","HAYABUSA","Inazuma","Inazuma 400","Intruder","Intruder 125","Intruder 800","JR 50","JR 80","Katana","LS 650 P Savage","Madura","Marauder","Nuda","Ozark 250 LTF250K","Quad","RF","RG","RG 200 F Gamma","RM","RMX","SP","Stratosphere","SV","TL 1000","TU","V-Strom","V-Strom 650","VANVAN","Vinson","VL 800 Volusia","VX 800","X1","X3","X6","XF 650 Freewind","XN 85D Turbo"]},
    {"make":"SWM","models":["GRAN MILANO","RS","SILVER VASE","SM","SUPERDUAL"]},
    {"make":"SYM","models":["ALLO","BA","CITICOM","COMBIZ","CROX","e-VIRID","FIDDLE","GTX","HD","JET","JOYRIDE","MAX","MIO","ORBIT","PHONY","PLY","QUADLANDER","QUADRAIDER","RV","T2","TONIK","WOLF","XS","X`PRO"]},
    {"make":"TGB","models":["BELLAVITA","BLADE","X-MOTION"]},
    {"make":"Triumph Motorcycle","models":["Adventurer","America","Bonneville","Bonneville T 100","Daytona","Daytona 675","Daytona 675 Triple","Daytona 955i","Rocket","Rocket III","Scrambler","Speed Four","Speed Triple","Speed Triple 900","Speedmaster","Sprint","Street Triple","Thruxton 900","Thunderbird","Tiger","Tiger 900","Trident","Trophy","TSS","TSX","TT 600","X 75 Hurricane"]},
    {"make":"URAL","models":["Cross","Gear-Up","Limited Edition","M70","Patrol","Ranger","Retro","Solo","Sportsman","T","Tourist","Troyka","Wolf"]},
    {"make":"VELOCETTE","models":["D","K","KTT MK","MAC","MAF","MOV","MSS","MT","Thruxton","USS","VALIANT","VEELINE","Venom","Viceroy","Viper","Vogue"]},
    {"make":"VENTO","models":["ANT","GLADIATOR XLS","HOTROD","PROTON DARK","REBELLIAN","SPIDER","STREET ROD","TERRA Z","TORNADO","V THUNDER XL","VIKING"]},
    {"make":"VERUCCI","models":["VC-Super bike 110","VC150-SP2 SPIRIT 2\\n","VC250 Phantom","VC50FS-10A","VIPER"]},
    {"make":"VESPA","models":["100","125","200","50","90","946","98","Cosa","ET","GL","GS","GT","GTR","GTV","LX","LXV","P","PK","Primavera","PX","Rally","S","SUPER","SUPER SPORT","TAP","TS 125","UTILITARIA","Veloce"]},
    {"make":"VICTORY","models":["Boardwalk","Core","Cross Country","Cross Roads","EMPULSE TT","Gunner","Hammer","Hard-Ball","High-ball","Jackpot","Judge","Kingpin","Magnum","OCTANE","Touring","V92","Vegas","Vegas 8-Ball","Vision"]},
    {"make":"VINCENT HRD","models":["BLACK EAGLE","BLACK LIGHTNING S","BLACK LIGHTNING ST","BLACK SHADOW","SERIES A RAPIDE"]},
    {"make":"VOR","models":["EN-E 450","EN-E 530","MX 450","SM-RC 570"]},
    {"make":"VOXAN","models":["Black Magic","Cafe Racer","Charade Racing","GTV","GV 1200","Roadster","Scrambler","Street Scrambler","VB1","WATTMAN"]},
    {"make":"VYRUS","models":["984 C3 2V","985 C3 4V","986 M2","987 C3 4V"]},
    {"make":"WAKAN","models":["1640 Racing","1640 Road"]},
    {"make":"WHIZZER","models":["Ambassador","Pacemaker","Panther","Sportsman"]},
    {"make":"WRM","models":["450 MX1"]},
    {"make":"YAMAHA","models":["Aerox","Aerox Race Replica","AG100","Big Bear","Blaster","Bolt","Bruin","BT 1100 Bulldog","BWs","C3","CygnusX","D'elight","DragStar","DT","Fazer","FJ","FJR 1300","FS-1","FSX","FZ","FZR","FZS 600 Fazer","FZX","Grizzly","GTS","GX","IT","Jog","KODIAC","Mabris Hybrid","MAJESTY","Max","Morpho 2","Morphous","MT","MT-01","MT-03","MT-OS","Neo's","PW","R1","R5","Raider","Raptor","RD","Rhino","Road Star","Roadliner","Royal Star","RS","RT 360","RX","RZ","Santa Barbara","SCR","SDR","Slider Naked","SMAX","SR","SRV","SRX","Stratoliner","Stryker","SUPER TENERE ES","SZR","TDM","TDR","Tesseract","TMAX","TR3","Tricity","Tricker","TT","TT-R","TW","TX","TZR","V Max","V Star","V Star 1100 Classic","V Star Silverado","V-MAX","VIKING","Vino","Vino 125","Warrior","Wolverine","WR","WR 250 F","WR 450 F","X-City","X-MAX","Xenter","XJ","XJ-R","XJR 1300","XS","XSR","XT","XT 225","XT 350","XT250","XV","XZ 550","YA","YBR-125","YD","YFA 125","YFM","YFS 200","YFZ","YR","YXZ","YZ","YZ 85","YZ450F","YZF","Zuma"]},
    {"make":"ZERO","models":["DS","DSP","DSR","FX","FXP","FXS","S","SR","XU"]},
    {"make":"ZUNDAPP","models":["Bella","K","Z"]}
]

export { motorcycleCheckbox, motorcycleDatabase }