/* ANATOMIA — i18n dictionary (UI + terminology tokens).
   Content text itself lives bilingual inside data/*.json. */

const LANGS = ["es", "en"];

const I18N = {
  es: {
    "brand.subtitle": "HUMAN KNOWLEDGE SYSTEM",
    "ui.search.placeholder": "Buscar estructuras, nervios, vasos, huesos…",
    "ui.history": "Historial de consulta",
    "ui.favorites": "Favoritos",
    "ui.loading": "Cargando base de conocimiento…",
    "ui.dataerror.title": "No se pudieron cargar los datos",
    "ui.dataerror.text": "Comprueba que los archivos de la carpeta data/ están disponibles y recarga la página.",

    "nav.s.systems": "Sistemas corporales",
    "nav.s.disciplines": "Disciplinas anatómicas",
    "nav.s.clinical": "Clínica y ciencias aplicadas",
    "nav.s.tools": "Herramientas de estudio",
    "nav.home": "Inicio",
    "nav.allmodules": "Los 24 módulos",
    "nav.atlas": "Atlas interactivo",
    "nav.quiz": "Evaluación",
    "nav.bibliography": "Bibliografía científica",
    "nav.favorites": "Favoritos",
    "nav.history": "Historial",
    "nav.planned": "planeado",

    "home.kicker": "Sistema de conocimiento anatómico",
    "home.title": "Enciclopedia anatómica humana bilingüe",
    "home.text": "Plataforma académica de anatomía con fichas anatómicas individuales, nomenclatura internacional (Terminologia Anatomica, FIPAT), red de relaciones entre estructuras, evaluaciones graduadas y trazabilidad bibliográfica. Idiomas: español e inglés médico.",
    "home.stat.structures": "Fichas anatómicas",
    "home.stat.relations": "Relaciones documentadas",
    "home.stat.modules": "Módulos del sistema",
    "home.stat.systems": "Sistemas cargados",
    "home.section.systems": "Sistemas anatómicos principales",
    "home.section.disciplines": "Disciplinas y ciencias aplicadas",
    "home.section.clinical": "Clínica",

    "module.planned.title": "Módulo en desarrollo",
    "module.planned.text": "Este módulo está registrado en la arquitectura del sistema y se activará en entregas sucesivas. El contenido anatómico disponible actualmente se redistribuye en los módulos activos para no duplicar información.",
    "module.structures": "Estructuras documentadas",
    "module.count": "estructuras",

    "identification": "Identificación",
    "morphology": "Morfología",
    "relations": "Relaciones anatómicas",
    "function": "Anatomía funcional",
    "innervation": "Inervación",
    "irrigation": "Irrigación y drenaje",
    "microanatomy": "Microanatomía",
    "development": "Desarrollo",
    "clinical": "Correlación clínica",
    "bibliography": "Bibliografía",
    "personalnotes": "Notas personales",
    "network": "Red de conocimiento",
    "network.intro": "Selecciona una relación para abrir su ficha.",
    "rel.type.origin": "Origen",
    "rel.type.insertion": "Inserción",
    "rel.type.innervation": "Inervado por",
    "rel.type.blood": "Irrigación",
    "rel.type.joint": "Articulación",
    "rel.type.synergist": "Sinergista",
    "rel.type.antagonist": "Antagonista",
    "rel.type.part_of": "Parte de",
    "rel.type.contains": "Contiene",
    "rel.type.adjacent": "Relación",
    "rel.type.supplies": "Irriga a",
    "rel.type.drains": "Drena a",
    "rel.type.branch": "Rama de",
    "rel.type.embryo": "Relación embriológica",
    "rel.type.projects_to": "Proyecta en",
    "rel.type.connected": "Conecta con",

    "fld.classification": "Clasificación",
    "fld.region": "Región anatómica",
    "fld.form": "Forma",
    "fld.size": "Dimensiones",
    "fld.orientation": "Orientación",
    "fld.parts": "Partes",
    "fld.surfaces": "Superficies",
    "fld.landmarks": "Accidentes anatómicos",
    "fld.verification": "Estado de verificación",

    "verification.pending": "Pendiente de verificación",
    "verification.pending.note": "Parte del contenido de esta ficha requiere contraste con la fuente impresa antes de considerarse verificado. No se han añadido datos para completar campos vacíos: los campos sin información fiable se dejaron vacíos expresamente.",
    "verification.consulted": "Contrastado con fuentes",

    "note.save": "Guardar nota",
    "note.saved": "Nota guardada",
    "fav.add": "Añadir a favoritos",
    "fav.remove": "Quitar de favoritos",
    "fav.added": "Añadido a favoritos",
    "fav.removed": "Eliminado de favoritos",
    "search.results": "Resultados de búsqueda",
    "search.none": "Sin resultados",
    "search.none.text": "No se encontraron estructuras para esa consulta. Prueba con el nombre en español, inglés, latín o un sinónimo.",
    "search.min": "Escribe al menos 2 caracteres.",
    "search.viewall": "Ver todos los resultados",

    "atlas.title": "Atlas interactivo",
    "atlas.subtitle": "Navegación por regiones corporales y sistemas",
    "atlas.note": "Los modelos tridimensionales reales (Three.js, mallas anatómicas verificadas) se integrarán en una entrega posterior. Esta versión no simula 3D con esquemas: navega por regiones, sistemas y fichas reales.",
    "atlas.structures": "estructuras",
    "atlas.allregions": "Todas las regiones",

    "quiz.title": "Evaluación y aprendizaje",
    "quiz.subtitle": "Preguntas con dificultad graduada (1 básica · 5 integración clínica), explicación razonada y registro de errores.",
    "quiz.scope": "Alcance",
    "quiz.scope.all": "Integral",
    "quiz.level": "Dificultad",
    "quiz.level.any": "Todas",
    "quiz.count": "Nº de preguntas",
    "quiz.start": "Comenzar evaluación",
    "quiz.next": "Siguiente",
    "quiz.finish": "Finalizar",
    "quiz.restart": "Repetir evaluación",
    "quiz.question": "Pregunta",
    "quiz.of": "de",
    "quiz.correct": "Correcto",
    "quiz.incorrect": "Incorrecto — la respuesta correcta es:",
    "quiz.result.title": "Resultado",
    "quiz.errorslogged": "Los errores se han registrado en tu seguimiento.",
    "quiz.stats.title": "Seguimiento de errores",
    "quiz.stats.none": "Aún no hay errores registrados.",
    "quiz.stats.right": "aciertos",
    "quiz.stats.wrong": "errores",
    "quiz.empty": "No hay preguntas para ese alcance/dificultad.",
    "lv.1": "Básica", "lv.2": "Intermedia", "lv.3": "Avanzada", "lv.4": "Universitaria", "lv.5": "Integración clínica",

    "bib.title": "Bibliografía científica",
    "bib.subtitle": "Obras de referencia consultadas para elaborar el contenido de las fichas. Los enlaces externos (DOI, artículos) se añadirán exclusivamente tras verificación por la vía editorial.",
    "bib.consulted": "Fuente consultada",
    "bib.pending": "Pendiente de verificación",
    "bib.note": "Distinción explícita entre fuentes consultadas y pendientes, exigida por el estándar editorial del proyecto.",

    "fav.title": "Favoritos",
    "fav.empty": "Todavía no has guardado fichas. Usa el botón de favorito en cualquier ficha anatómica.",
    "hist.title": "Historial de consulta",
    "hist.empty": "Aún no has consultado fichas.",
    "hist.clear": "Vaciar historial",
    "hist.recent": "Búsquedas recientes",
    "hist.recent.empty": "Sin búsquedas recientes.",
    "hist.cleared": "Historial vaciado",

    "misc.back": "Volver",
    "misc.allmodules": "Todos los módulos",
    "misc.openmod": "Abrir módulo",
    "misc.err.notfound": "Estructura no encontrada",
    "misc.err.notfound.text": "La estructura solicitada no existe en la base de datos actual.",
    "misc.notfoundcode": "404 · estructura inexistente",
    "misc.integrity": "Integridad verificada",
    "misc.integritytext": "Todas las referencias entre fichas apuntan a estructuras existentes.",
    "misc.notmedical": "Contenido con finalidad educativa. No constituye diagnóstico ni consejo médico.",

    "region.head_neck": "Cabeza y cuello",
    "region.thorax": "Tórax",
    "region.abdomen": "Abdomen",
    "region.pelvis": "Pelvis",
    "region.back": "Espalda",
    "region.upper_limb": "Miembro superior",
    "region.lower_limb": "Miembro inferior",
    "region.whole": "Todo el cuerpo",
    "region.cellular": "Microscópica / sistémica",

    "sys.skeletal": "Esquelético", "sys.muscular": "Muscular", "sys.nervous": "Nervioso",
    "sys.cardiovascular": "Cardiovascular", "sys.respiratory": "Respiratorio",
    "sys.digestive": "Digestivo", "sys.urinary": "Urinario", "sys.endocrine": "Endocrino",
    "sys.lymphatic": "Linfático", "sys.integumentary": "Tegumentario",
    "sys.histology": "Histológico", "sys.embryology": "Embriológico",
    "sys.articulations": "Articular", "sys.clinical": "Clínico"
  },

  en: {
    "brand.subtitle": "HUMAN KNOWLEDGE SYSTEM",
    "ui.search.placeholder": "Search structures, nerves, vessels, bones…",
    "ui.history": "Consultation history",
    "ui.favorites": "Favorites",
    "ui.loading": "Loading knowledge base…",
    "ui.dataerror.title": "Data could not be loaded",
    "ui.dataerror.text": "Check that the files in the data/ folder are available and reload the page.",

    "nav.s.systems": "Body systems",
    "nav.s.disciplines": "Anatomical disciplines",
    "nav.s.clinical": "Clinical & applied sciences",
    "nav.s.tools": "Study tools",
    "nav.home": "Home",
    "nav.allmodules": "All 24 modules",
    "nav.atlas": "Interactive atlas",
    "nav.quiz": "Assessment",
    "nav.bibliography": "Scientific bibliography",
    "nav.favorites": "Favorites",
    "nav.history": "History",
    "nav.planned": "planned",

    "home.kicker": "Anatomical knowledge system",
    "home.title": "Bilingual human anatomy encyclopedia",
    "home.text": "Academic anatomy platform with individual anatomical records, international nomenclature (Terminologia Anatomica, FIPAT), a structure-relationship network, graded assessments and bibliographic traceability. Languages: Spanish and medical English.",
    "home.stat.structures": "Anatomical records",
    "home.stat.relations": "Documented relations",
    "home.stat.modules": "System modules",
    "home.stat.systems": "Loaded systems",
    "home.section.systems": "Main anatomical systems",
    "home.section.disciplines": "Disciplines and applied sciences",
    "home.section.clinical": "Clinical",

    "module.planned.title": "Module in development",
    "module.planned.text": "This module is registered in the system architecture and will be activated in successive deliveries. Available anatomical content is currently distributed across active modules to avoid duplicated information.",
    "module.structures": "Documented structures",
    "module.count": "structures",

    "identification": "Identification",
    "morphology": "Morphology",
    "relations": "Anatomical relations",
    "function": "Functional anatomy",
    "innervation": "Innervation",
    "irrigation": "Blood supply and drainage",
    "microanatomy": "Microanatomy",
    "development": "Development",
    "clinical": "Clinical correlation",
    "bibliography": "Bibliography",
    "personalnotes": "Personal notes",
    "network": "Knowledge network",
    "network.intro": "Select a relation to open its record.",
    "rel.type.origin": "Origin",
    "rel.type.insertion": "Insertion",
    "rel.type.innervation": "Inner\u00advated by",
    "rel.type.blood": "Blood supply",
    "rel.type.joint": "Joint",
    "rel.type.synergist": "Synergist",
    "rel.type.antagonist": "Antagonist",
    "rel.type.part_of": "Part of",
    "rel.type.contains": "Contains",
    "rel.type.adjacent": "Related to",
    "rel.type.supplies": "Supplies",
    "rel.type.drains": "Drains into",
    "rel.type.branch": "Branch of",
    "rel.type.embryo": "Embryologic relation",
    "rel.type.projects_to": "Projects to",
    "rel.type.connected": "Connects with",

    "fld.classification": "Classification",
    "fld.region": "Anatomical region",
    "fld.form": "Shape",
    "fld.size": "Dimensions",
    "fld.orientation": "Orientation",
    "fld.parts": "Parts",
    "fld.surfaces": "Surfaces",
    "fld.landmarks": "Anatomical landmarks",
    "fld.verification": "Verification status",

    "verification.pending": "Pending verification",
    "verification.pending.note": "Part of this record's content requires cross-checking against the printed source before being considered verified. No data have been invented to fill empty fields: fields without reliable information were deliberately left out.",
    "verification.consulted": "Cross-checked with sources",

    "note.save": "Save note",
    "note.saved": "Note saved",
    "fav.add": "Add to favorites",
    "fav.remove": "Remove from favorites",
    "fav.added": "Added to favorites",
    "fav.removed": "Removed from favorites",
    "search.results": "Search results",
    "search.none": "No results",
    "search.none.text": "No structures found for that query. Try the Spanish name, English name, Latin term or a synonym.",
    "search.min": "Type at least 2 characters.",
    "search.viewall": "View all results",

    "atlas.title": "Interactive atlas",
    "atlas.subtitle": "Navigation by body regions and systems",
    "atlas.note": "Real three-dimensional models (Three.js, verified anatomical meshes) will be integrated in a later delivery. This version does not fake 3D with schematics: navigate by regions, systems and real records.",
    "atlas.structures": "structures",
    "atlas.allregions": "All regions",

    "quiz.title": "Assessment and learning",
    "quiz.subtitle": "Questions with graded difficulty (1 basic · 5 clinical integration), reasoned explanations and error tracking.",
    "quiz.scope": "Scope",
    "quiz.scope.all": "Comprehensive",
    "quiz.level": "Difficulty",
    "quiz.level.any": "All",
    "quiz.count": "Number of questions",
    "quiz.start": "Start assessment",
    "quiz.next": "Next",
    "quiz.finish": "Finish",
    "quiz.restart": "Retake assessment",
    "quiz.question": "Question",
    "quiz.of": "of",
    "quiz.correct": "Correct",
    "quiz.incorrect": "Incorrect — the correct answer is:",
    "quiz.result.title": "Result",
    "quiz.errorslogged": "Errors have been recorded in your tracking.",
    "quiz.stats.title": "Error tracking",
    "quiz.stats.none": "No errors recorded yet.",
    "quiz.stats.right": "correct",
    "quiz.stats.wrong": "wrong",
    "quiz.empty": "No questions available for that scope/difficulty.",
    "lv.1": "Basic", "lv.2": "Intermediate", "lv.3": "Advanced", "lv.4": "University", "lv.5": "Clinical integration",

    "bib.title": "Scientific bibliography",
    "bib.subtitle": "Reference works consulted to build the anatomical records. External links (DOIs, papers) are added only after explicit verification by the editorial process.",
    "bib.consulted": "Consulted source",
    "bib.pending": "Pending verification",
    "bib.note": "Explicit distinction between consulted and pending sources, required by the project's editorial standard.",

    "fav.title": "Favorites",
    "fav.empty": "You have not saved any records yet. Use the favorite button on any anatomical record.",
    "hist.title": "Consultation history",
    "hist.empty": "You have not consulted any records yet.",
    "hist.clear": "Clear history",
    "hist.recent": "Recent searches",
    "hist.recent.empty": "No recent searches.",
    "hist.cleared": "History cleared",

    "misc.back": "Back",
    "misc.allmodules": "All modules",
    "misc.openmod": "Open module",
    "misc.err.notfound": "Structure not found",
    "misc.err.notfound.text": "The requested structure does not exist in the current database.",
    "misc.notfoundcode": "404 · nonexistent structure",
    "misc.integrity": "Integrity verified",
    "misc.integritytext": "All cross-record references point to existing structures.",
    "misc.notmedical": "Educational content. It does not constitute medical diagnosis or advice.",

    "region.head_neck": "Head and neck",
    "region.thorax": "Thorax",
    "region.abdomen": "Abdomen",
    "region.pelvis": "Pelvis",
    "region.back": "Back",
    "region.upper_limb": "Upper limb",
    "region.lower_limb": "Lower limb",
    "region.whole": "Whole body",
    "region.cellular": "Microscopic / systemic",

    "sys.skeletal": "Skeletal", "sys.muscular": "Muscular", "sys.nervous": "Nervous",
    "sys.cardiovascular": "Cardiovascular", "sys.respiratory": "Respiratory",
    "sys.digestive": "Digestive", "sys.urinary": "Urinary", "sys.endocrine": "Endocrine",
    "sys.lymphatic": "Lymphatic", "sys.integumentary": "Integumentary",
    "sys.histology": "Histologic", "sys.embryology": "Embryologic",
    "sys.articulations": "Articular", "sys.clinical": "Clinical"
  }
};

function t(lang, key) {
  const d = I18N[lang] || I18N.es;
  return d[key] != null ? d[key] : (I18N.es[key] != null ? I18N.es[key] : key);
}

function tx(lang, field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] != null ? field[lang] : (field.es != null ? field.es : "");
}


/* ANATOMIA — IndexedDB persistence layer.
   Stores: favorites, notes, history, quiz, recents. All user-local. */

const DB_NAME = "anatomia";
const DB_VERSION = 1;
const STORES = ["favorites", "notes", "history", "quiz", "recents"];

let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB not available"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (ev) => {
      const db = ev.target.result;
      for (const s of STORES) {
        if (!db.objectStoreNames.contains(s)) {
          db.createObjectStore(s, { keyPath: "id" });
        }
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("IndexedDB open failed"));
  });
  return dbPromise;
}

async function idxTx(store, mode, fn) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const t = db.transaction(store, mode);
    const os = t.objectStore(store);
    let result;
    try {
      const req = fn(os);
      if (req) req.onsuccess = () => { result = req.result; };
    } catch (e) {
      reject(e);
      return;
    }
    t.oncomplete = () => resolve(result);
    t.onerror = () => reject(t.error || new Error("Transaction failed"));
    t.onabort = () => reject(t.error || new Error("Transaction aborted"));
  });
}

const DB = {
  async getAll(store) {
    const rows = await idxTx(store, "readonly", (os) => os.getAll());
    return rows || [];
  },
  async get(store, id) {
    return await idxTx(store, "readonly", (os) => os.get(id));
  },
  async put(store, row) {
    row.id = row.id ?? crypto.randomUUID();
    await idxTx(store, "readwrite", (os) => os.put(row));
    return row;
  },
  async del(store, id) {
    await idxTx(store, "readwrite", (os) => os.delete(id));
  },
  async clear(store) {
    await idxTx(store, "readwrite", (os) => os.clear());
  }
};

/* ---- higher-level helpers ---- */

const Store = {
  async isFavorite(id) {
    return (await DB.get("favorites", id)) != null;
  },
  async getFavorites() {
    return await DB.getAll("favorites");
  },
  async toggleFavorite(row) {
    const existing = await DB.get("favorites", row.id);
    if (existing) {
      await DB.del("favorites", row.id);
      return false;
    }
    await DB.put("favorites", { ...row, ts: Date.now() });
    return true;
  },
  async getNote(id) {
    const r = await DB.get("notes", id);
    return r ? r.text : "";
  },
  async saveNote(id, text) {
    await DB.put("notes", { id, text, ts: Date.now() });
  },
  async pushHistory(row) {
    await DB.put("history", { ...row, ts: Date.now() });
    const all = await DB.getAll("history");
    if (all.length > 80) {
      all.sort((a, b) => a.ts - b.ts);
      for (const old of all.slice(0, all.length - 80)) await DB.del("history", old.id);
    }
  },
  async getHistory() {
    const all = await DB.getAll("history");
    return all.sort((a, b) => b.ts - a.ts);
  },

  async pushRecent(term) {
    term = term.trim();
    if (term.length < 2) return;
    const id = term.toLowerCase();
    const existing = await DB.get("recents", id);
    const ts = Date.now();
    if (existing) await DB.put("recents", { id, term, ts });
    else await DB.put("recents", { id, term, ts });
    const all = await DB.getAll("recents");
    if (all.length > 12) {
      all.sort((a, b) => a.ts - b.ts);
      for (const old of all.slice(0, all.length - 12)) await DB.del("recents", old.id);
    }
  },
  async getRecents() {
    const all = await DB.getAll("recents");
    return all.sort((a, b) => b.ts - a.ts);
  },

  async recordAnswer(questionId, correct) {
    const existing = (await DB.get("quiz", questionId)) || { id: questionId, right: 0, wrong: 0, ts: 0 };
    if (correct) existing.right += 1; else existing.wrong += 1;
    existing.ts = Date.now();
    await DB.put("quiz", existing);
  },
  async getQuizStats() {
    return await DB.getAll("quiz");
  }
};


/* ANATOMIA — global search engine.
   Indexes names (es / en / latin) plus synonyms of every structure.
   Accent-insensitive, weighted scoring. */

function normalize(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function buildIndex(structures) {
  return structures.map((s) => ({
    id: s.id,
    nameEs: s.name.es,
    nameEn: s.name.en,
    latin: s.name.latin || "",
    synonyms: [...(s.synonyms?.es || []), ...(s.synonyms?.en || [])],
    system: s.system,
    region: s.region,
    raw: s
  }));
}

function scoreTerm(hit, q) {
  const qs = normalize(q);
  if (qs.length < 2) return -1;
  let best = -1;

  const candidates = [
    ...hit.synonyms.map((x) => ({ v: x, w: 0.75 })),
    { v: hit.latin, w: 0.9 },
    { v: hit.nameEs, w: 1 },
    { v: hit.nameEn, w: 1 }
  ];

  for (const { v, w } of candidates) {
    const nv = normalize(v);
    if (!nv) continue;
    let s = -1;
    if (nv === qs) s = 120;
    else if (nv.startsWith(qs)) s = 80;
    else if (new RegExp("\\b" + qs.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(nv)) s = 55;
    else if (nv.includes(qs)) s = 22;
    else {
      // all query words present (e.g. "musculo biceps")
      const words = normalize(q).split(/\s+/);
      if (words.length > 1 && words.every((wd) => nv.includes(wd))) s = 40;
    }
    if (s > 0) best = Math.max(best, s * w);
  }
  return best;
}

function search(index, query, limit = 50, offset = 0) {
  const scored = [];
  for (const hit of index) {
    const sc = scoreTerm(hit, query);
    if (sc > 0) scored.push({ hit, sc });
  }
  scored.sort((a, b) => b.sc - a.sc || a.hit.nameEs.localeCompare(b.hit.nameEs));
  return {
    results: scored.slice(offset, offset + limit).map((r) => r.hit),
    total: scored.length
  };
}


/* ANATOMIA — module registry: the 24 anatomic modules, mapped to data files.
   planned = registered in architecture, activated in successive deliveries. */

const MODULES = [
  { id: "osteologia", name: { es: "Osteología", en: "Osteology" }, file: "skeletal.json", section: "systems",
    desc: { es: "Huesos: morfología, accidentes anatómicos, vascularización y desarrollo.", en: "Bones: morphology, landmarks, vascularization and development." } },
  { id: "artrologia", name: { es: "Artrología", en: "Arthrology" }, file: "articulations.json", section: "systems",
    desc: { es: "Articulaciones: clasificación, superficies, medios de unión y movimiento.", en: "Joints: classification, articular surfaces, binding media and movement." } },
  { id: "miologia", name: { es: "Miología", en: "Myology" }, file: "muscular.json", section: "systems",
    desc: { es: "Músculos esqueléticos: origen, inserción, inervación y biomecánica.", en: "Skeletal muscles: origin, insertion, innervation and biomechanics." } },
  { id: "neuroanatomia", name: { es: "Neuroanatomía", en: "Neuroanatomy" }, file: "nervous.json", section: "systems",
    desc: { es: "Sistema nervioso central y periférico, vías, núcleos y circuitos.", en: "Central and peripheral nervous system, tracts, nuclei and circuits." } },
  { id: "angiologia", name: { es: "Angiología", en: "Angiology" }, file: "cardiovascular.json", section: "systems",
    desc: { es: "Vasos sanguíneos y linfáticos, trayectos y territorios de irrigación.", en: "Blood and lymphatic vessels, courses and irrigation territories." } },
  { id: "corazon", name: { es: "Corazón", en: "Heart" }, file: "cardiovascular.json", filter: (s) => s.id === "heart" || s.id === "aorta",
    desc: { es: "Anatomía cardiovascular del órgano central y grandes vasos.", en: "Cardiovascular anatomy of the central organ and great vessels." } },
  { id: "respiratorio", name: { es: "Sistema respiratorio", en: "Respiratory system" }, file: "respiratory.json", section: "systems",
    desc: { es: "Vías aéreas y pulmones, del nivel macroscópico al alveolar.", en: "Airways and lungs, from macroscopic to alveolar level." } },
  { id: "digestivo", name: { es: "Sistema digestivo", en: "Digestive system" }, file: "digestive.json", section: "systems",
    desc: { es: "Tubo digestivo e glándulas anejas. Morfología e histología.", en: "Digestive tract and accessory glands. Morphology and histology." } },
  { id: "urinario", name: { es: "Sistema urinario", en: "Urinary system" }, file: "urinary.json", section: "systems",
    desc: { es: "Riñones, vías excretoras y microanatomía renal (nefrona).", en: "Kidneys, excretory passages and renal microanatomy (nephron)." } },
  { id: "endocrino", name: { es: "Sistema endocrino", en: "Endocrine system" }, file: "endocrine.json", section: "systems",
    desc: { es: "Glándulas endocrinas, ejes hormonales y correlaciones clínicas.", en: "Endocrine glands, hormonal axes and clinical correlations." } },
  { id: "linfatico", name: { es: "Sistema linfático e inmunitario", en: "Lymphatic & immune system" }, file: "lymphatic.json", section: "systems",
    desc: { es: "Órganos linfoides, vasos linfáticos y drenaje regional.", en: "Lymphoid organs, lymphatic vessels and regional drainage." } },
  { id: "tegumentario", name: { es: "Sistema tegumentario", en: "Integumentary system" }, file: "integumentary.json", section: "systems",
    desc: { es: "Piel y anejos: epidermis, dermis, faneras.", en: "Skin and appendages: epidermis, dermis, adnexa." } },

  { id: "sensoriales", name: { es: "Órganos sensoriales", en: "Sensory organs" }, section: "disciplines", planned: true,
    desc: { es: "Globo ocular, oído, gustación y olfacción. Entrega 2.", en: "Eyeball, ear, gustation and olfaction. Delivery 2." } },
  { id: "topografica", name: { es: "Anatomía topográfica", en: "Topographic anatomy" }, section: "disciplines", planned: true,
    desc: { es: "Espacios, triángulos, planos y proyecciones de superficie. Entrega 3.", en: "Spaces, triangles, planes and surface projections. Delivery 3." } },
  { id: "regional", name: { es: "Anatomía regional", en: "Regional anatomy" }, section: "disciplines", planned: true,
    desc: { es: "Estudio por regiones corporales integrando todos los sistemas. Entrega 3.", en: "Study by body regions integrating all systems. Delivery 3." } },
  { id: "citologia", name: { es: "Citología", en: "Cytology" }, section: "disciplines", planned: true,
    desc: { es: "Estructura celular, orgánulos y ciclo celular. Entrega 2.", en: "Cell structure, organelles and cell cycle. Delivery 3." } },
  { id: "histologia", name: { es: "Histología", en: "Histology" }, file: "histology.json", section: "disciplines",
    desc: { es: "Tejidos fundamentales y arquitectura microscópica de los órganos.", en: "Fundamental tissues and microscopic architecture of organs." } },
  { id: "anatomia-microscopica", name: { es: "Anatomía microscópica", en: "Microscopic anatomy" }, file: "histology.json", section: "disciplines",
    desc: { es: "Microanatomía de órganos y estructuras por debajo del límite del ojo.", en: "Microanatomy of organs and structures below the eye's resolution." } },
  { id: "embriologia", name: { es: "Embriología humana", en: "Human embryology" }, file: "embryology.json", section: "disciplines",
    desc: { es: "Desarrollo prenatal, orígenes embriológicos de las estructuras.", en: "Prenatal development, embryologic origins of structures." } },

  { id: "radiologica", name: { es: "Anatomía radiológica", en: "Radiologic anatomy" }, section: "clinical", planned: true,
    desc: { es: "Correlación de estructuras con TC, RM y radiografía. Entrega 2.", en: "Structure correlation with CT, MRI and radiography. Delivery 2." } },
  { id: "funcional", name: { es: "Anatomía funcional", en: "Functional anatomy" }, section: "clinical", planned: true,
    desc: { es: "Síntesis funcional del aparato locomotor y las vísceras. Entrega 2.", en: "Functional synthesis of the locomotor apparatus and viscera. Delivery 2." } },
  { id: "biomecanica", name: { es: "Biomecánica", en: "Biomechanics" }, section: "clinical", planned: true,
    desc: { es: "Palancas, vectores de fuerza y análisis del movimiento. Entrega 2.", en: "Levers, force vectors and movement analysis. Delivery 2." } },
  { id: "clinica", name: { es: "Anatomía clínica", en: "Clinical anatomy" }, file: "clinical.json", section: "clinical",
    desc: { es: "Patologías, variantes, anatomía quirúrgica y correlación con procedimientos.", en: "Pathologies, variants, surgical anatomy and procedure correlation." } }
];

function moduleById(id) {
  return MODULES.find((m) => m.id === id) || null;
}

/* Regions for the atlas */
const REGIONS = ["head_neck", "thorax", "abdomen", "pelvis", "back", "upper_limb", "lower_limb"];


/* ANATOMIA — view renderers. Pure DOM construction from the bilingual data layer. */


function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
const textNode = (s) => document.createTextNode(s);

/* ---------- helpers ---------- */

function relatedSystemLabel(ctx, sys) { return t(ctx.lang, "sys." + sys); }
function regionLabel(ctx, reg) { return t(ctx.lang, "region." + reg); }

function structName(ctx, s) {
  return ctx.lang === "en" ? s.name.en : s.name.es;
}
function structOtherName(ctx, s) {
  return ctx.lang === "en" ? s.name.es : s.name.en;
}

function relationChip(ctx, targetId, typeKey) {
  const s = ctx.structures.get(targetId);
  if (!s) return null;
  const b = el("button", "relation-chip");
  const ty = el("span", "rel-type", esc(t(ctx.lang, "rel.type." + typeKey)));
  b.appendChild(ty);
  b.appendChild(textNode(structName(ctx, s)));
  b.addEventListener("click", () => ctx.navigate("#/s/" + targetId));
  return b;
}

function block(title, cls) {
  const b = el("div", "card-block" + (cls ? " " + cls : ""));
  b.appendChild(el("h2", null, esc(title)));
  const body = el("div", "block-body");
  b.appendChild(body);
  return { block: b, body };
}

function listBlock(ctx, items) {
  const ul = el("ul");
  for (const it of items) ul.appendChild(el("li", null, esc(it)));
  return ul;
}

/* ---------- Home ---------- */

function renderHome(container, ctx) {
  let relCount = 0;
  for (const s of ctx.structures.values()) relCount += (s.relationsList || []).length;

  const head = el("div", "hero");
  head.innerHTML = `
    <div class="kicker">${esc(t(ctx.lang, "home.kicker"))}</div>
    <h1>${esc(t(ctx.lang, "home.title"))}</h1>
    <p>${esc(t(ctx.lang, "home.text"))}</p>
    <div class="hero-stats">
      <div class="hero-stat"><b>${ctx.structures.size}</b><span>${esc(t(ctx.lang, "home.stat.structures"))}</span></div>
      <div class="hero-stat"><b>${relCount}</b><span>${esc(t(ctx.lang, "home.stat.relations"))}</span></div>
      <div class="hero-stat"><b>${MODULES.length}</b><span>${esc(t(ctx.lang, "home.stat.modules"))}</span></div>
      <div class="hero-stat"><b>${ctx.loadedFiles}</b><span>${esc(t(ctx.lang, "home.stat.systems"))}</span></div>
    </div>`;

  container.innerHTML = "";
  container.appendChild(head);

  const addSection = (titleKey, modules, sectionTitleCls) => {
    const mods = modules.filter((m) => m.section === sectionTitleCls);
    if (!mods.length) return;
    container.appendChild(el("h2", "section-title" + (sectionTitleCls === "clinical" ? " turquoise" : ""), esc(t(ctx.lang, titleKey))));
    const grid = el("div", "grid-cards");
    for (const m of mods) {
      const count = ctx.moduleCounts.get(m.id);
      const card = el("a", "mod-card");
      card.href = "#/module/" + m.id;
      const planned = m.planned;
      card.innerHTML = `
        <span class="mc-count${planned ? " planned" : ""}">${planned
          ? esc(t(ctx.lang, "nav.planned"))
          : (count || 0) + " " + esc(t(ctx.lang, "module.count"))}</span>
        <h3>${esc(ctx.lang === "en" ? m.name.en : m.name.es)}</h3>
        <span class="mc-en">${esc(ctx.lang === "en" ? m.name.es : m.name.en)}</span>
        <p>${esc(ctx.lang === "en" ? m.desc.en : m.desc.es)}</p>`;
      grid.appendChild(card);
    }
    container.appendChild(grid);
  };

  addSection("home.section.systems", MODULES, "systems");
  addSection("home.section.disciplines", MODULES, "disciplines");
  addSection("home.section.clinical", MODULES, "clinical");
}

/* ---------- All modules ---------- */

function renderAllModules(container, ctx) {
  renderHome(container, ctx);
}

/* ---------- Module ---------- */

function renderModule(container, ctx, modId) {
  const mod = moduleById(modId);
  if (!mod) return renderError(container, ctx);

  const crumb = el("div", "breadcrumb",
    `<a href="#/home">${esc(t(ctx.lang, "nav.home"))}</a><span class="sep">›</span><span></span>`
  );
  crumb.lastChild.appendChild(textNode(ctx.lang === "en" ? mod.name.en : mod.name.es));

  const head = el("div", "page-head");
  head.appendChild(crumb);
  head.appendChild(el("div", "page-kicker", esc(t(ctx.lang, "nav.s." + (mod.section === "systems" ? "systems" : mod.section === "disciplines" ? "disciplines" : "clinical")))));
  head.appendChild(el("h1", "page-title", esc(ctx.lang === "en" ? mod.name.en : mod.name.es)));
  head.appendChild(el("p", "page-sub", esc(ctx.lang === "en" ? mLocal(mod.desc).en : mLocal(mod.desc).es)));

  function mLocal(d) { return ctx.lang === "en" ? d.en : d.es; }

  container.innerHTML = "";
  container.appendChild(head);

  if (mod.planned) {
    container.appendChild(el("div", "empty-note",
      `<b>${esc(t(ctx.lang, "module.planned.title"))}.</b> ${esc(t(ctx.lang, "module.planned.text"))}`));
    return;
  }

  const structs = ctx.moduleCounts.get(mod.id) !== undefined ? ctx.getModuleStructures(modId) : [];
  container.appendChild(el("h2", "section-title", `${esc(t(ctx.lang, "module.structures"))} · ${structs.length}`));

  if (!structs.length) {
    container.appendChild(el("div", "empty-note",
      `<b>${esc(t(ctx.lang, "module.planned.title"))}.</b> ${esc(t(ctx.lang, "module.planned.text"))}`));
    return;
  }

  const list = el("div", "struct-list");
  for (const s of structs) {
    const row = el("a", "struct-row");
    row.href = "#/s/" + s.id;
    const fav = ctx.favorites.has(s.id) ? `<span class="fav-star">★</span>` : "";
    row.innerHTML = `
      <span class="sr-name">${fav ? "★ " : ""}${esc(structName(ctx, s))}</span>
      <span class="sr-latin">${esc(s.name.latin || "")}</span>
      <span class="sr-region">${esc(regionLabel(ctx, s.region))}</span>`;
    list.appendChild(row);
  }
  container.appendChild(list);
}

/* ---------- Structure record ---------- */

async function renderStructure(container, ctx, structId) {
  const s = ctx.structures.get(structId);
  if (!s) return renderError(container, ctx);

  await ctx.recordHistory({ id: s.id, name: structName(ctx, s) });

  container.innerHTML = "";

  /* header */
  const head = el("div", "card-header");
  const crumb = el("div", "breadcrumb");
  crumb.innerHTML = `<a href="#/home">${esc(t(ctx.lang, "nav.home"))}</a><span class="sep">›</span>`
    + `<a href="#/module/${ctx.systemModule[s.system] || ""}">${esc(relatedSystemLabel(ctx, s.system))}</a><span class="sep">›</span><span></span>`;
  crumb.lastChild.appendChild(textNode(structName(ctx, s)));
  head.appendChild(crumb);

  const trow = el("div", "card-title-row");
  const tt = el("div");
  tt.appendChild(el("h1", null, esc(structName(ctx, s))));
  tt.appendChild(el("div", "card-title-en", esc(structOtherName(ctx, s))));
  if (s.name.latin) tt.appendChild(el("div", "card-title-latin", esc(s.name.latin)));
  trow.appendChild(tt);

  const actions = el("div", "card-header-actions");
  const favBtn = el("button", "btn ghost", ctx.favorites.has(s.id) ? "★ " + esc(t(ctx.lang, "fav.remove")) : "☆ " + esc(t(ctx.lang, "fav.add")));
  favBtn.addEventListener("click", async () => {
    const added = await ctx.toggleFavorite({ id: s.id, nameEs: s.name.es, nameEn: s.name.en, system: s.system, region: s.region });
    ctx.toast(t(ctx.lang, added ? "fav.added" : "fav.removed"));
    favBtn.innerHTML = added ? "★ " + esc(t(ctx.lang, "fav.remove")) : "☆ " + esc(t(ctx.lang, "fav.add"));
    ctx.refreshFavorites();
  });
  actions.appendChild(favBtn);
  trow.appendChild(actions);
  head.appendChild(trow);

  const badges = el("div", null);
  badges.style.marginTop = "10px";
  badges.innerHTML =
    `<span class="badge system">${esc(relatedSystemLabel(ctx, s.system))}</span>` +
    `<span class="badge">${esc(regionLabel(ctx, s.region))}</span>` +
    (s.verification === "pending"
      ? `<span class="badge verification-pending">${esc(t(ctx.lang, "verification.pending"))}</span>` : "");
  head.appendChild(badges);

  if ((s.synonyms && (s.synonyms.es || s.synonyms.en))) {
    const syn = el("div", "syn-row");
    const es = (s.synonyms.es || []).map((x) => x + (ctx.lang === "en" ? " (es)" : ""));
    const en = (s.synonyms.en || []).map((x) => x + (ctx.lang === "en" ? "" : " (en)"));
    for (const term of es.concat(en)) syn.appendChild(el("span", "syn-chip", esc(term)));
    head.appendChild(syn);
  }
  container.appendChild(head);

  /* identification */
  if (s.classification) {
    const { block: b, body } = block(t(ctx.lang, "identification"));
    const grid = el("div", "field-grid");
    const addField = (labelKey, value) => {
      if (!value) return;
      const f = el("div", "field");
      f.innerHTML = `<div class="f-label">${esc(t(ctx.lang, labelKey))}</div><div class="f-value">${esc(value)}</div>`;
      grid.appendChild(f);
    };
    addField("fld.classification", tx(ctx.lang, s.classification));
    addField("fld.region", regionLabel(ctx, s.region));
    addField("fld.verification", s.verification === "pending" ? t(ctx.lang, "verification.pending") : t(ctx.lang, "verification.consulted"));
    body.appendChild(grid);
    container.appendChild(b);
  }

  /* morphology */
  const M = s.morphology;
  if (M) {
    const { block: b, body } = block(t(ctx.lang, "morphology"));
    const pairs = [
      ["fld.form", tx(ctx.lang, M.form)],
      ["fld.size", tx(ctx.lang, M.size)],
      ["fld.orientation", tx(ctx.lang, M.orientation)]
    ];
    const grid = el("div", "field-grid");
    for (const [k, v] of pairs) {
      if (!v) continue;
      const f = el("div", "field");
      f.innerHTML = `<div class="f-label">${esc(t(ctx.lang, k))}</div><div class="f-value">${esc(v)}</div>`;
      grid.appendChild(f);
    }
    if (grid.children.length) body.appendChild(grid);
    if (M.parts && M.parts[ctx.lang]) {
      body.appendChild(el("div", "f-label", esc(t(ctx.lang, "fld.parts")))).style.margin = "10px 0 4px";
      body.appendChild(listBlock(ctx, M.parts[ctx.lang]));
    }
    if (M.list && M.list[ctx.lang]) body.appendChild(listBlock(ctx, M.list[ctx.lang]));
    if (M.landmarks && M.landmarks[ctx.lang]) {
      body.appendChild(el("div", "f-label", esc(t(ctx.lang, "fld.landmarks")))).style.margin = "10px 0 4px";
      body.appendChild(listBlock(ctx, M.landmarks[ctx.lang]));
    }
    if (M.surfaces && M.surfaces[ctx.lang]) {
      body.appendChild(el("div", "f-label", esc(t(ctx.lang, "fld.surfaces")))).style.margin = "10px 0 4px";
      body.appendChild(listBlock(ctx, M.surfaces[ctx.lang]));
    }
    if (body.children.length) container.appendChild(b);
  }

  /* relations */
  if (s.relations && s.relations[ctx.lang]) {
    const { block: b, body } = block(t(ctx.lang, "relations"), "turquoise");
    body.appendChild(listBlock(ctx, s.relations[ctx.lang]));
    container.appendChild(b);
  }

  /* network */
  const rels = (s.relationsList || []);
  const incoming = [];
  for (const other of ctx.structures.values()) {
    if (other.id === s.id) continue;
    for (const r of other.relationsList || []) {
      if (r.target === s.id) incoming.push({ target: other.id, type: r.type, back: other.id });
    }
  }
  if (rels.length || incoming.length) {
    const { block: b, body } = block(t(ctx.lang, "network"), "turquoise");
    body.appendChild(el("p", null, esc(t(ctx.lang, "network.intro")))).style.marginBottom = "8px";
    const rl = el("div", "relation-list");
    for (const r of rels) {
      const c = relationChip(ctx, r.target, r.type);
      if (c) rl.appendChild(c);
    }
    for (const r of incoming) {
      const c = relationChip(ctx, r.target, r.type);
      if (c) rl.appendChild(c);
    }
    body.appendChild(rl);
    container.appendChild(b);
  }

  /* list-type sections */
  const listSections = [
    ["function", false], ["innervation", false], ["irrigation", false],
    ["microanatomy", true], ["development", false], ["clinical", true]
  ];
  for (const [key, turq] of listSections) {
    const val = s[key];
    if (!val || !val[ctx.lang]) continue;
    const { block: b, body } = block(t(ctx.lang, key), turq ? "turquoise" : null);
    body.appendChild(listBlock(ctx, val[ctx.lang]));
    if (key === "clinical") {
      body.appendChild(el("div", "verification-note", "ℹ " + esc(t(ctx.lang, "misc.notmedical"))));
    }
    if (s.pendingNotes && s.pendingNotes[key] && s.pendingNotes[key][ctx.lang]) {
      body.appendChild(el("div", "verification-note", "⚠ " + esc(s.pendingNotes[key][ctx.lang])));
    }
    container.appendChild(b);
  }

  /* bibliography */
  if (s.refs && s.refs.length) {
    const { block: b, body } = block(t(ctx.lang, "bibliography"));
    const ul = el("ul", "ref-list");
    for (const refId of s.refs) {
      const r = ctx.refs.find((x) => x.id === refId);
      if (!r) continue;
      const li = el("li");
      li.appendChild(textNode(r.title + `, ${r.edition ? r.edition + ", " : ""}${r.publisher}, ${r.year}`));
      li.appendChild(el("span", "ref-status " + (r.status === "consulted" ? "consulted" : "pending"),
        esc(t(ctx.lang, r.status === "consulted" ? "bib.consulted" : "bib.pending"))));
      ul.appendChild(li);
    }
    body.appendChild(ul);
    container.appendChild(b);
  }

  /* personal notes */
  const { block: nb, body: nbody } = block(t(ctx.lang, "personalnotes"));
  const ta = el("textarea", "note-area");
  const saved = await ctx.getNote(s.id);
  ta.value = saved || "";
  const saveBtn = el("button", "btn ghost", esc(t(ctx.lang, "note.save")));
  saveBtn.style.marginTop = "10px";
  saveBtn.addEventListener("click", async () => {
    await ctx.saveNote(s.id, ta.value);
    ctx.toast(t(ctx.lang, "note.saved"));
  });
  nbody.appendChild(ta);
  nbody.appendChild(saveBtn);
  container.appendChild(nb);
}

/* ---------- Search results page ---------- */

function renderSearchResults(container, ctx, query) {
  const head = el("div", "page-head");
  head.appendChild(el("div", "page-kicker", esc(t(ctx.lang, "search.results"))));
  head.appendChild(el("h1", "page-title", `“${esc(query)}”`));
  container.innerHTML = "";
  container.appendChild(head);

  const { results, total } = runSearch(ctx.index, query);
  if (!total) {
    container.appendChild(el("div", "empty-note", `<b>${esc(t(ctx.lang, "search.none"))}.</b> ${esc(t(ctx.lang, "search.none.text"))}`));
    return;
  }
  const list = el("div", "struct-list");
  for (const hit of results) {
    const row = el("a", "struct-row");
    row.href = "#/s/" + hit.id;
    row.innerHTML = `
      <span class="sr-name">${esc(hit.nameEs)}</span>
      <span class="sr-latin">${esc(hit.latin || hit.nameEn)}</span>
      <span class="sr-region">${esc(relatedSystemLabel(ctx, hit.system))}</span>`;
    list.appendChild(row);
  }
  container.appendChild(list);
}

/* ---------- Favorites ---------- */

async function renderFavorites(container, ctx) {
  const head = el("div", "page-head");
  head.appendChild(el("h1", "page-title", esc(t(ctx.lang, "fav.title"))));
  container.innerHTML = "";
  const favs = await ctx.dbFavorites();
  container.appendChild(head);

  if (!favs.length) {
    head.appendChild(el("p", "page-sub", esc(t(ctx.lang, "fav.empty"))));
    return;
  }
  const list = el("div", "struct-list");
  for (const f of favs.sort((a, b) => b.ts - a.ts)) {
    const row = el("a", "struct-row");
    row.href = "#/s/" + f.id;
    row.innerHTML = `<span class="sr-name">★ ${esc(ctx.lang === "en" ? f.nameEn : f.nameEs)}</span>
      <span class="sr-region">${esc(relatedSystemLabel(ctx, f.system))}</span>`;
    list.appendChild(row);
  }
  container.appendChild(list);
}

/* ---------- History ---------- */

async function renderHistory(container, ctx) {
  const head = el("div", "page-head");
  head.appendChild(el("h1", "page-title", esc(t(ctx.lang, "hist.title"))));
  container.innerHTML = "";
  const hist = await ctx.dbHistory();
  container.appendChild(head);

  const recents = await ctx.dbRecents();
  if (recents.length) {
    head.appendChild(el("div", "f-label", esc(t(ctx.lang, "hist.recent")))).style.marginTop = "8px";
    const rl = el("div", "syn-row");
    for (const r of recents) {
      const c = el("span", "syn-chip", esc(r.term));
      c.style.cursor = "pointer";
      c.addEventListener("click", () => ctx.runGlobalSearch(r.term));
      rl.appendChild(c);
    }
    head.appendChild(rl);
  }

  if (!hist.length) {
    head.appendChild(el("p", "page-sub", esc(t(ctx.lang, "hist.empty"))));
    return;
  }
  const clearBtn = el("button", "btn ghost danger", esc(t(ctx.lang, "hist.clear")));
  clearBtn.addEventListener("click", async () => {
    await ctx.clearHistory();
    ctx.toast(t(ctx.lang, "hist.cleared"));
    renderHistory(container, ctx);
  });
  head.appendChild(clearBtn).style.marginTop = "12px";

  const wrap = el("div");
  for (const h of hist) {
    const row = el("button", "history-item");
    const date = new Date(h.ts).toLocaleString(ctx.lang === "en" ? "en-GB" : "es-ES");
    row.innerHTML = `<span>${esc(h.name)}</span><time>${esc(date)}</time>`;
    row.addEventListener("click", () => ctx.navigate("#/s/" + h.id));
    wrap.appendChild(row);
  }
  container.appendChild(wrap);
}

/* ---------- Bibliography ---------- */

function renderBibliography(container, ctx) {
  const head = el("div", "page-head");
  head.appendChild(el("div", "page-kicker", esc(t(ctx.lang, "nav.bibliography"))));
  head.appendChild(el("h1", "page-title", esc(t(ctx.lang, "bib.title"))));
  head.appendChild(el("p", "page-sub", esc(t(ctx.lang, "bib.subtitle"))));
  container.innerHTML = "";
  container.appendChild(head);

  const consulted = el("ul", "ref-list");
  const pending = el("ul", "ref-list");
  for (const r of ctx.refs) {
    const li = el("li");
    li.appendChild(textNode(
      `${r.authors}. ${r.title}` + (r.edition ? ` (${r.edition}).` : ".") +
      ` ${r.publisher}, ${r.year}.` + (r.status_note ? " " + r.status_note : "")
    ));
    li.appendChild(el("span", "ref-status " + (r.status === "consulted" ? "consulted" : "pending"),
      esc(t(ctx.lang, r.status === "consulted" ? "bib.consulted" : "bib.pending"))));
    (r.status === "consulted" ? consulted : pending).appendChild(li);
  }

  container.appendChild(el("h2", "section-title", esc(t(ctx.lang, "bib.consulted"))));
  container.appendChild(consulted);
  if (pending.children.length) {
    container.appendChild(el("h2", "section-title muted", esc(t(ctx.lang, "bib.pending"))));
    container.appendChild(pending);
  }
  container.appendChild(el("div", "verification-note", "ℹ " + esc(t(ctx.lang, "bib.note"))));
  container.appendChild(el("div", "verification-note", "ℹ " + esc(t(ctx.lang, "misc.notmedical"))));
}

/* ---------- Atlas ---------- */

function renderAtlas(container, ctx, region) {
  const head = el("div", "page-head");
  head.appendChild(el("div", "page-kicker", esc(t(ctx.lang, "nav.atlas"))));
  head.appendChild(el("h1", "page-title", esc(t(ctx.lang, "atlas.title"))));
  head.appendChild(el("p", "page-sub", esc(t(ctx.lang, "atlas.subtitle"))));
  container.innerHTML = "";
  container.appendChild(head);
  container.appendChild(el("div", "verification-note", "ℹ " + esc(t(ctx.lang, "atlas.note")))).style.marginBottom = "22px";

  if (!region) {
    const grid = el("div", "atlas-region-grid");
    for (const reg of REGIONS) {
      const structs = ctx.structuresByRegion.get(reg) || [];
      const card = el("button", "atlas-region");
      card.innerHTML = `
        <h3>${esc(t(ctx.lang, "region." + reg))}</h3>
        <div class="ar-en">${esc(ctx.lang === "en" ? regionEn(reg) : regionEs(reg))}</div>
        <div class="ar-count">${structs.length} ${esc(t(ctx.lang, "atlas.structures"))} →</div>`;
      card.addEventListener("click", () => ctx.navigate("#/atlas/" + reg));
      grid.appendChild(card);
    }
    container.appendChild(grid);
    return;
  }

  const crumb = el("div", "breadcrumb",
    `<a href="#/atlas">${esc(t(ctx.lang, "atlas.title"))}</a><span class="sep">›</span><span>${esc(t(ctx.lang, "region." + region))}</span>`);
  container.appendChild(crumb);

  const systems = ["skeletal", "muscular", "nervous", "cardiovascular", "respiratory", "digestive", "urinary", "endocrine", "lymphatic", "integumentary", "histology"];
  for (const sys of systems) {
    const structs = (ctx.structuresByRegion.get(region) || []).filter((s) => s.system === sys);
    if (!structs.length) continue;
    container.appendChild(el("h2", "section-title", esc(relatedSystemLabel(ctx, sys))));
    const list = el("div", "struct-list");
    for (const s of structs) {
      const row = el("a", "struct-row");
      row.href = "#/s/" + s.id;
      row.innerHTML = `<span class="sr-name">${esc(structName(ctx, s))}</span>
        <span class="sr-latin">${esc(s.name.latin || "")}</span>`;
      list.appendChild(row);
    }
    container.appendChild(list);
  }
}

function regionEn(reg) {
  return {
    head_neck: "Head and neck", thorax: "Thorax", abdomen: "Abdomen", pelvis: "Pelvis",
    back: "Back", upper_limb: "Upper limb", lower_limb: "Lower limb"
  }[reg] || reg;
}
function regionEs(reg) {
  return { head_neck: "Cabeza y cuello", thorax: "Tórax", abdomen: "Abdomen", pelvis: "Pelvis", back: "Espalda", upper_limb: "Miembro superior", lower_limb: "Miembro inferior" }[reg] || reg;
}

/* ---------- Errors ---------- */

function renderError(container, ctx, code) {
  container.innerHTML = `
    <div class="error-view">
      <div class="code">${esc(code || t(ctx.lang, "misc.notfoundcode"))}</div>
      <h1>${esc(t(ctx.lang, "misc.err.notfound"))}</h1>
      <p>${esc(t(ctx.lang, "misc.err.notfound.text"))}</p>
      <p style="margin-top:16px"><a class="btn ghost" href="#/home" style="text-decoration:none">${esc(t(ctx.lang, "nav.home"))}</a></p>
    </div>`;
}


/* ANATOMIA — assessment engine (quiz + error tracking).
   State machine: setup → question → result. Progress persisted in IndexedDB. */


function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initQuiz(container, ctx) {
  const { lang, Store, questions, navigate } = ctx;
  let scope = "all";
  let level = 0;
  let count = 10;

  renderSetup();

  function pad(s) {
    const el = document.createElement("div");
    el.innerHTML = s;
    return el;
  }

  function renderSetup() {
    const systems = [...new Set(questions.map((q) => q.system))].sort();

    const seg = (items, active, onclick) => {
      const g = document.createElement("div");
      g.className = "seg-group";
      for (const it of items) {
        const b = document.createElement("button");
        b.className = "seg-btn" + (it.value === active ? " active" : "");
        b.textContent = it.label;
        b.dataset.value = String(it.value);
        b.addEventListener("click", () => onclick(it.value, g));
        g.appendChild(b);
      }
      return g;
    };

    const scopes = [{ value: "all", label: t(lang, "quiz.scope.all") }]
      .concat(systems.map((s) => ({ value: s, label: t(lang, "sys." + s) || s })));

    const levels = [{ value: 0, label: t(lang, "quiz.level.any") }]
      .concat([1, 2, 3, 4, 5].map((l) => ({ value: l, label: l + " · " + t(lang, "lv." + l) })));

    const counts = [5, 10, 15, 25].map((c) => ({ value: c, label: String(c) }));

    const wrap = document.createElement("div");
    wrap.className = "quiz-setup";
    wrap.innerHTML = `
      <div class="page-head">
        <div class="page-kicker">${t(lang, "nav.quiz")}</div>
        <h1 class="page-title">${t(lang, "quiz.title")}</h1>
        <p class="page-sub">${t(lang, "quiz.subtitle")}</p>
      </div>`;
    const mkBlock = (labelKey, node) => {
      const d = document.createElement("div");
      const lab = document.createElement("div");
      lab.className = "f-label";
      lab.style.marginBottom = "6px";
      lab.textContent = t(lang, labelKey);
      d.appendChild(lab);
      d.appendChild(node);
      wrap.appendChild(d);
    };

    const scopesNode = seg(scopes, scope, (v, g) => { scope = v; setActive(g, v); });
    const levelsNode = seg(levels, level, (v, g) => { level = Number(v); setActive(g, String(v)); });
    const countsNode = seg(counts, count, (v, g) => { count = Number(v); setActive(g, String(v)); });

    mkBlock("quiz.scope", scopesNode);
    mkBlock("quiz.level", levelsNode);
    mkBlock("quiz.count", countsNode);

    const start = document.createElement("button");
    start.className = "btn";
    start.style.alignSelf = "flex-start";
    start.textContent = t(lang, "quiz.start") + " →";
    start.addEventListener("click", begin);
    wrap.appendChild(start);

    const stats = document.createElement("div");
    stats.id = "quiz-error-stats";
    wrap.appendChild(stats);
    renderErrorStats(stats);

    container.innerHTML = "";
    container.appendChild(wrap);
  }

  function setActive(group, value) {
    group.querySelectorAll(".seg-btn").forEach((b) =>
      b.classList.toggle("active", b.dataset.value === value));
  }

  function filtered() {
    let qs = questions;
    if (scope !== "all") qs = qs.filter((q) => q.system === scope);
    if (level > 0) qs = qs.filter((q) => q.level === level);
    return shuffle(qs).slice(0, count);
  }

  function begin() {
    const qs = filtered();
    if (!qs.length) { alert(t(lang, "quiz.empty")); return; }
    session = { qs, i: 0, answers: [] };
    renderQuestion();
  }

  let session = null;

  function renderQuestion() {
    const q = session.qs[session.i];
    const order = shuffle(q.options.map((o, idx) => ({ o, idx })));
    const isLast = session.i === session.qs.length - 1;

    const progress = `<div class="quiz-progress"><div class="bar" style="width:${(session.i / session.qs.length) * 100}%"></div></div>`;

    const box = document.createElement("div");
    box.innerHTML = `
      ${progress}
      <div class="quiz-question">
        <div class="quiz-q-meta">
          <span>${t(lang, "quiz.question")} ${session.i + 1} ${t(lang, "quiz.of")} ${session.qs.length}</span>
          <span class="badge system">${t(lang, "lv." + q.level)}</span>
          <span class="badge">${t(lang, "sys." + q.system) || q.system}</span>
        </div>
        <div class="quiz-q-text"></div>
        <div class="quiz-options"></div>
        <div class="quiz-explanation" style="display:none"></div>
        <div class="quiz-footer">
          <span class="f-label"></span>
          <button class="btn" style="display:none" id="quiz-next">${t(lang, isLast ? "quiz.finish" : "quiz.next")} →</button>
        </div>
      </div>`;
    box.querySelector(".quiz-q-text").textContent = tx(lang, q.question);
    const opts = box.querySelector(".quiz-options");

    let answered = false;
    order.forEach(({ o, idx }, pos) => {
      const b = document.createElement("button");
      b.className = "quiz-option";
      const key = document.createElement("span");
      key.className = "opt-key";
      key.textContent = String.fromCharCode(65 + pos);
      const txt = document.createElement("span");
      txt.textContent = o[lang] || o.es;
      b.appendChild(key); b.appendChild(txt);
      b.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const correct = idx === q.answer;
        session.answers.push({ q, picked: idx, correct, id: q.id });
        Store.recordAnswer(q.id, correct);
        opts.querySelectorAll(".quiz-option").forEach((ob, qbIdx) => {
          ob.disabled = true;
          if (order[qbIdx].idx === q.answer) ob.classList.add("correct");
          else if (order[qbIdx].idx === idx) ob.classList.add("wrong");
        });
        const ex = box.querySelector(".quiz-explanation");
        ex.style.display = "block";
        ex.innerHTML = `<strong>${t(lang, correct ? "quiz.correct" : "quiz.incorrect")}</strong> ${tx(lang, q.explanation)}`;
        const foot = box.querySelector(".quiz-footer span");
        foot.textContent = correct ? "✓ " + t(lang, "quiz.correct") : "✕";
        foot.style.color = correct ? "var(--ok)" : "var(--danger)";
        const nextBtn = box.querySelector("#quiz-next");
        nextBtn.style.display = "inline-flex";
        nextBtn.addEventListener("click", () => {
          if (isLast) renderResult();
          else { session.i += 1; renderQuestion(); }
        });
      });
      opts.appendChild(b);
    });

    container.innerHTML = "";
    container.appendChild(box);
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderResult() {
    const total = session.answers.length;
    const ok = session.answers.filter((a) => a.correct).length;
    const pct = total ? Math.round((ok / total) * 100) : 0;

    const wrap = document.createElement("div");
    wrap.innerHTML = `
      <div class="quiz-result">
        <div class="f-label" style="margin-bottom:6px">${t(lang, "quiz.result.title")}</div>
        <div class="quiz-score ${pct < 50 ? "error" : ""}">${pct}%</div>
        <p class="page-sub">${ok} / ${total} · ${t(lang, "quiz.errorslogged")}</p>
        <button class="btn" id="quiz-again" style="margin-top:18px">${t(lang, "quiz.restart")}</button>
      </div>
      <div class="quiz-stats-grid" id="quiz-result-stats"></div>`;
    wrap.querySelector("#quiz-again").addEventListener("click", renderSetup);
    renderErrorStats(wrap.querySelector("#quiz-result-stats"));
    container.innerHTML = "";
    container.appendChild(wrap);
  }

  async function renderErrorStats(node) {
    const stats = await Store.getQuizStats();
    const withErrors = stats.filter((s) => s.wrong > 0).sort((a, b) => b.wrong - a.wrong).slice(0, 12);
    if (!withErrors.length) {
      node.innerHTML = `<div class="empty-note"><b>${t(lang, "quiz.stats.title")}:</b> ${t(lang, "quiz.stats.none")}</div>`;
      return;
    }
    const grid = document.createElement("div");
    grid.className = "quiz-stats-grid";
    grid.innerHTML = `<div class="f-label" style="grid-column:1/-1">${t(lang, "quiz.stats.title")}</div>`;
    for (const s of withErrors) {
      const q = questions.find((qq) => qq.id === s.id);
      if (!q) continue;
      const d = document.createElement("div");
      d.className = "field";
      const lab = document.createElement("div");
      lab.className = "f-label";
      lab.textContent = t(lang, "sys." + q.system) + " · " + t(lang, "lv." + q.level);
      const val = document.createElement("div");
      val.className = "f-value";
      val.textContent = tx(lang, q.question).slice(0, 70) + (tx(lang, q.question).length > 70 ? "…" : "");
      const meta = document.createElement("div");
      meta.style.cssText = "font-family:var(--mono);font-size:11px;margin-top:4px;color:var(--ok)";
      meta.textContent = `${s.right} ${t(lang, "quiz.stats.right")} · `;
      const w = document.createElement("span");
      w.style.color = "var(--danger)";
      w.textContent = `${s.wrong} ${t(lang, "quiz.stats.wrong")}`;
      meta.appendChild(w);
      d.appendChild(lab); d.appendChild(val); d.appendChild(meta);
      grid.appendChild(d);
    }
    node.innerHTML = "";
    node.appendChild(grid);
  }
}


/* ============================================================
   ANATOMIA — Human Knowledge System
   App bootstrap: data loading, routing, search UI, favorites.
   ============================================================ */


const DATA_FILES = [
  "skeletal", "articulations", "muscular", "nervous", "cardiovascular",
  "respiratory", "digestive", "urinary", "endocrine", "lymphatic",
  "integumentary", "histology", "embryology", "clinical", "assessment", "references"
];

const SYSTEM_MODULES = {
  skeletal: "osteologia",
  articulations: "artrologia",
  muscular: "miologia",
  nervous: "neuroanatomia",
  cardiovascular: "angiologia",
  respiratory: "respiratorio",
  digestive: "digestivo",
  urinary: "urinario",
  endocrine: "endocrino",
  lymphatic: "linfatico",
  integumentary: "tegumentario",
  histology: "histologia",
  embryology: "embriologia",
  clinical: "clinica"
};

const state = {
  lang: localStorage.getItem("anatomia.lang") || "es",
  structures: new Map(),
  index: [],
  refs: [],
  questions: [],
  assessment: null,
  moduleCounts: new Map(),
  structuresByRegion: new Map(),
  systemModule: SYSTEM_MODULES,
  loadedFiles: 0,
  favorites: new Set(),
  currentView: null
};

/* ---------- DOM ---------- */

const $ = (sel) => document.querySelector(sel);
const main = $("#main");
const sidebar = $("#sidebar");
const backdrop = $("#sidebar-backdrop");
const searchInput = $("#global-search");
const searchDrop = $("#search-dropdown");

function closeSidebar() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
}
$("#nav-toggle").addEventListener("click", () => {
  sidebar.classList.toggle("open");
  backdrop.classList.toggle("show", sidebar.classList.contains("open"));
});
backdrop.addEventListener("click", closeSidebar);
$("#fav-header-btn").addEventListener("click", () => { navigate("#/favorites"); closeSidebar(); });
$("#history-btn").addEventListener("click", () => { navigate("#/history"); closeSidebar(); });
$("#lang-es").addEventListener("click", () => setLang("es"));
$("#lang-en").addEventListener("click", () => setLang("en"));

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  state.lang = lang;
  localStorage.setItem("anatomia.lang", lang);
  document.documentElement.lang = lang;
  $("#lang-es").classList.toggle("active", lang === "es");
  $("#lang-en").classList.toggle("active", lang === "en");
  $("#lang-es").setAttribute("aria-pressed", String(lang === "es"));
  $("#lang-en").setAttribute("aria-pressed", String(lang === "en"));
  applyStaticI18n();
  renderRoute(true);
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((n) => {
    n.textContent = t(state.lang, n.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((n) => {
    for (const pair of n.dataset.i18nAttr.split(";")) {
      const [attr, key] = pair.split(":").map((x) => x.trim());
      if (attr && key) n.setAttribute(attr, t(state.lang, key));
    }
  });
}

/* ---------- Toast ---------- */

let toastTimer = null;
function toast(msg) {
  const elx = $("#toast");
  elx.textContent = msg;
  elx.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { elx.hidden = true; }, 2200);
}

/* ---------- Data loading ---------- */

function b64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

async function decodeDataPart() {
  const raw = (window.ANATOMIA_P || "").trim();
  if (!raw) throw new Error("data1.js / data2.js no encontrados o vacíos.");
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Tu navegador es muy viejo para descomprimir los datos. Usá Chrome, Edge, Firefox o Safari actualizados.");
  }
  const stream = new Blob([b64ToBytes(raw)]).stream().pipeThrough(new DecompressionStream("gzip"));
  return JSON.parse(await new Response(stream).text());
}

async function loadData() {
  const parts = await decodeDataPart();
  const results = DATA_FILES.map((f) => parts[f] || null);
  const failed = DATA_FILES.filter((f, i) => results[i] == null);
  if (failed.length) {
    throw new Error(`data/ load failed: ${failed.join(", ")} — ${t(state.lang, "ui.dataerror.text")}`);
  }
const [skeletal, articulations, muscular, nervous, cardiovascular, respiratory,
    digestive, urinary, endocrine, lymphatic, integumentary, histology, embryology,
    clinical, assessment, references] = results;

  const files = {
    skeletal, articulations, muscular, nervous, cardiovascular, respiratory,
    digestive, urinary, endocrine, lymphatic, integumentary, histology,
    embryology, clinical
  };
  state.assessment = assessment;
  state.refs = references.references || [];
  state.questions = assessment.questions || [];

  for (const [fileKey, payload] of Object.entries(files)) {
    for (const s of payload.structures || []) {
      if (state.structures.has(s.id)) {
        console.warn(`Duplicate structure id: ${s.id} (${fileKey})`);
        continue;
      }
      state.structures.set(s.id, s);
    }
  }
  state.loadedFiles = Object.values(files).filter((p) => (p.structures || []).length).length;
  state.index = buildIndex([...state.structures.values()]);
  indexModules();
}

function indexModules() {
  state.moduleCounts = new Map();
  state.structuresByRegion = new Map(REGIONS.concat(["cellular"]).map((r) => [r, []]));
  for (const mod of MODULES) {
    state.moduleCounts.set(mod.id, mod.planned ? 0 : getModuleStructures(mod.id).length);
  }
  for (const s of state.structures.values()) {
    if (state.structuresByRegion.has(s.region)) state.structuresByRegion.get(s.region).push(s);
  }
}

function getModuleStructures(modId) {
  const mod = moduleById(modId);
  if (!mod || mod.planned) return [];
  const out = [];
  for (const s of state.structures.values()) {
    if (s.modules && s.modules.includes(mod.id)) { out.push(s); continue; }
    const sysMod = SYSTEM_MODULES[s.system];
    if (sysMod === mod.id && (!s.modules || s.modules.includes(mod.id))) out.push(s);
    else if (mod.filter && mod.filter(s)) out.push(s);
    else if (mod.file && sysMod !== mod.id && s.modules && s.modules.includes(mod.id)) { /* already added */ }
  }
  return out;
}

/* ---------- Sidebar ---------- */

function renderSidebar() {
  const nav = $("#side-nav");
  nav.innerHTML = "";

  const section = (key, mods) => {
    const sec = document.createElement("div");
    sec.className = "nav-section";
    const h = document.createElement("div");
    h.className = "nav-heading";
    h.innerHTML = `<span class="dot${key === "clinical" ? " turquoise" : ""}"></span><span class="${key === "clinical" ? "turquoise" : ""}"></span>`;
    h.lastChild.style.display = "none";
    const span = document.createElement("span");
    span.textContent = t(state.lang, key);
    h.appendChild(span);
    nav.appendChild(sec);
    sec.appendChild(h);
    for (const m of mods) {
      const c = state.moduleCounts.get(m.id) || 0;
      const a = document.createElement("a");
      a.className = "nav-link";
      a.href = "#/module/" + m.id;
      a.dataset.modId = m.id;
      const nameSpan = document.createElement("span");
      nameSpan.textContent = state.lang === "en" ? m.name.en : m.name.es;
      a.appendChild(nameSpan);
      const tail = document.createElement("span");
      tail.style.marginLeft = "auto";
      tail.className = m.planned ? "planned-tag" : "count";
      tail.textContent = m.planned ? t(state.lang, "nav.planned") : String(c);
      a.appendChild(tail);
      sec.appendChild(a);
    }
  };

  const home = document.createElement("a");
  home.className = "nav-link";
  home.href = "#/home";
  home.textContent = "⌂ " + t(state.lang, "nav.home");
  nav.appendChild(home);

  const tools = document.createElement("div");
  tools.className = "nav-section";
  tools.innerHTML = `<div class="nav-heading"><span class="dot turquoise"></span><span>${t(state.lang, "nav.s.tools")}</span></div>`;
  const toolDefs = [
    ["#/atlas", "nav.atlas"],
    ["#/quiz", "nav.quiz"],
    ["#/favorites", "nav.favorites"],
    ["#/history", "nav.history"],
    ["#/bib", "nav.bibliography"]
  ];
  for (const [href, key] of toolDefs) {
    const a = document.createElement("a");
    a.className = "nav-link";
    a.href = href;
    a.textContent = t(state.lang, key);
    tools.appendChild(a);
  }

  section("nav.s.systems", MODULES.filter((m) => m.section === "systems"));
  section("nav.s.disciplines", MODULES.filter((m) => m.section === "disciplines"));
  section("nav.s.clinical", MODULES.filter((m) => m.section === "clinical"));
  nav.appendChild(tools);

  $("#data-count").textContent = `${state.structures.size} fichas · ${state.refs.length} fuentes`;
  markActiveNav();
}

function markActiveNav() {
  const hash = location.hash || "#/home";
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle("active", hash === a.getAttribute("href"));
  });
}

/* ---------- Global search UI ---------- */

let searchTimer = null;

function renderSearchDropdown() {
  const q = searchInput.value.trim();
  if (q.length < 2) { searchDrop.hidden = true; searchDrop.innerHTML = ""; return; }
  const { results, total } = runSearch(state.index, q, 8);
  searchDrop.innerHTML = "";
  if (!total) {
    searchDrop.appendChild(Object.assign(document.createElement("div"),
      { className: "search-empty", textContent: t(state.lang, "search.none") }));
  } else {
    for (const hit of results) {
      const b = document.createElement("button");
      b.className = "search-hit";
      b.innerHTML = `
        <span class="hit-name"></span>
        <span class="hit-latin"></span>
        <span class="hit-sys"></span>`;
      b.querySelector(".hit-name").textContent = state.lang === "en" ? hit.nameEn : hit.nameEs;
      b.querySelector(".hit-latin").textContent = hit.latin || "";
      b.querySelector(".hit-sys").textContent = t(state.lang, "sys." + hit.system) || hit.system;
      b.addEventListener("click", () => {
        searchDrop.hidden = true;
        searchInput.value = "";
        navigate("#/s/" + hit.id);
      });
      searchDrop.appendChild(b);
    }
    if (total > results.length) {
      const more = document.createElement("div");
      more.className = "search-more";
      more.textContent = `${t(state.lang, "search.viewall")} (${total})`;
      more.addEventListener("click", () => { searchDrop.hidden = true; runGlobalSearch(q); });
      searchDrop.appendChild(more);
    }
  }
  searchDrop.hidden = false;
}

function runGlobalSearch(q) {
  q = (q || "").trim();
  if (q.length < 2) return;
  Store.pushRecent(q);
  state.query = q;
  location.hash = "#/search/" + encodeURIComponent(q);
}

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderSearchDropdown, 130);
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchDrop.hidden = true;
    runGlobalSearch(searchInput.value);
    searchInput.blur();
  }
  if (e.key === "Escape") { searchDrop.hidden = true; searchInput.blur(); }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".searchbox")) searchDrop.hidden = true;
});

/* ---------- Router ---------- */

function navigate(hash) {
  if (location.hash === hash) renderRoute(true);
  else location.hash = hash;
}

async function renderRoute(keepScroll) {
  const hash = location.hash || "#/home";
  markActiveNav();
  if (!keepScroll) window.scrollTo(0, 0);
  main.scrollTop = 0;

  const parts = hash.replace(/^#\//, "").split("/");
  const route = parts[0] || "home";
  const arg = parts[1] ? decodeURIComponent(parts[1]) : null;
  state.currentView = route;

  try {
    switch (route) {
      case "home":
        renderHome(main, ctx());
        break;
      case "modules":
        renderAllModules(main, ctx());
        break;
      case "module":
        renderModule(main, ctx(), arg);
        break;
      case "s":
        await renderStructure(main, ctx(), arg);
        break;
      case "search":
        if (arg) renderSearchResults(main, ctx(), arg);
        else renderError(main, ctx());
        break;
      case "quiz":
        renderQuizView();
        break;
      case "bib":
        renderBibliography(main, ctx());
        break;
      case "favorites":
        await renderFavorites(main, ctx());
        break;
      case "history":
        await renderHistory(main, ctx());
        break;
      case "atlas":
        renderAtlas(main, ctx(), arg || null);
        break;
      default:
        renderError(main, ctx());
    }
  } catch (err) {
    console.error(err);
    renderError(main, ctx(), "500 · " + err.message);
  }
  closeSidebar();
}

function ctx() {
  return {
    lang: state.lang,
    structures: state.structures,
    index: state.index,
    refs: state.refs,
    favorites: state.favorites,
    moduleCounts: state.moduleCounts,
    structuresByRegion: state.structuresByRegion,
    systemModule: SYSTEM_MODULES,
    loadedFiles: state.loadedFiles,
    navigate,
    toast,
    toggleFavorite: (row) => Store.toggleFavorite(row).then((added) => {
      if (added) state.favorites.add(row.id); else state.favorites.delete(row.id);
      return added;
    }),
    getNote: (id) => Store.getNote(id),
    saveNote: (id, text) => Store.saveNote(id, text),
    recordHistory: (row) => Store.pushHistory(row),
    dbFavorites: () => Store.getFavorites(),
    dbHistory: () => Store.getHistory(),
    dbRecents: () => Store.getRecents(),
    clearHistory: () => DB.clear("history"),
    refreshFavorites,
    runGlobalSearch,
    getModuleStructures
  };
}

function renderQuizView() {
  main.innerHTML = "";
  const c = elx("div");
  main.appendChild(c);
  initQuiz(c, {
    lang: state.lang,
    Store,
    questions: state.questions,
    navigate
  });
}

function elx(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

/* ---------- Boot ---------- */

async function refreshFavorites() {
  state.favorites = new Set((await Store.getFavorites()).map((f) => f.id));
  $("#fav-header-btn").classList.toggle("has-badge", state.favorites.size > 0);
}
state.refreshFavorites = refreshFavorites;

async function boot() {
  const patch = document.createElement("style");
  patch.textContent = ".quiz-options{display:flex;flex-direction:column;gap:9px;max-width:640px;}";
  document.head.appendChild(patch);
  document.documentElement.lang = state.lang;
  $("#lang-es").classList.toggle("active", state.lang === "es");
  $("#lang-en").classList.toggle("active", state.lang === "en");
  applyStaticI18n();
  window.addEventListener("hashchange", () => renderRoute(false));

  try {
    await Promise.all([loadData(), refreshFavorites()]);
  } catch (err) {
    console.error(err);
    main.innerHTML = `
      <div class="error-view">
        <div class="code">DATA LOAD ERROR</div>
        <h1>${t(state.lang, "ui.dataerror.title")}</h1>
        <p>${escHtml(String(err.message || err))}</p>
      </div>`;
    return;
  }
  renderSidebar();
  if (!location.hash) location.hash = "#/home";
  renderRoute(false);
}

function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

boot();
