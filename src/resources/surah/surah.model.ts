import mongoose, { Schema, Document } from "mongoose";

interface IVerses {
  audio_one: string;
  verses: number;
  english?: string;
  text: string;
  //  translation
  ar: {
    text: string;
  };
  en: {
    text: string;
  };
  az: {
    text: string;
  };
  bg: {
    text: string;
  };
  bn: {
    text: string;
  };
  bs: {
    text: string;
  };
  cs: {
    text: string;
  };
  de: {
    text: string;
  };
  dv: {
    text: string;
  };
  es: {
    text: string;
  };
  fa: {
    text: string;
  };
  fr: {
    text: string;
  };
  ha: {
    text: string;
  };
  ja: {
    text: string;
  };
  ko: {
    text: string;
  };
  ku: {
    text: string;
  };
  ml: {
    text: string;
  };
  ms: {
    text: string;
  };
  nl: {
    text: string;
  };
  no: {
    text: string;
  };
  pl: {
    text: string;
  };
  pt: {
    text: string;
  };
  ro: {
    text: string;
  };
  ru: {
    text: string;
  };
  sd: {
    text: string;
  };
  so: {
    text: string;
  };
  sq: {
    text: string;
  };
  sv: {
    text: string;
  };
  hi: {
    text: string;
  };
  id_l: {
    text: string;
  };
  it: {
    text: string;
  };
}

interface ISurah extends Document {
  number: number;
  name: string;
  transliteration: string;
  translation: string;
  revelation_type: string;
  total_verses: number;
  audio_one?: string;
  verses: IVerses[];
}

const SurahSchema: Schema = new Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      require: true,
    },
    transliteration: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    revelation_type: {
      type: String,
      required: true,
    },
    total_verses: {
      type: Number,
      required: true,
    },
    audio_one: {
      type: String,
    },
    verses: [
      {
        audio_one: {
          type: String,
          required: true,
        },
        verses: {
          type: Number,
          required: true,
        },
        english: {
          type: String,
        },
        text: {
          type: String,
          required: true,
        },
        // translation:
        ar: {
          text: {
            type: String,
          },
        },
        en: {
          text: {
            type: String,
          },
        },
        az: {
          text: {
            type: String,
          },
        },
        bg: {
          text: {
            type: String,
          },
        },
        bn: {
          text: {
            type: String,
          },
        },
        bs: {
          text: {
            type: String,
          },
        },
        cs: {
          text: {
            type: String,
          },
        },
        de: {
          text: {
            type: String,
          },
        },
        dv: {
          text: {
            type: String,
          },
        },
        es: {
          text: {
            type: String,
          },
        },
        fa: {
          text: {
            type: String,
          },
        },
        fr: {
          text: {
            type: String,
          },
        },
        ha: {
          text: {
            type: String,
          },
        },
        ja: {
          text: {
            type: String,
          },
        },
        ko: {
          text: {
            type: String,
          },
        },
        ku: {
          text: {
            type: String,
          },
        },
        ml: {
          text: {
            type: String,
          },
        },
        ms: {
          text: {
            type: String,
          },
        },
        nl: {
          text: {
            type: String,
          },
        },
        no: {
          text: {
            type: String,
          },
        },
        pl: {
          text: {
            type: String,
          },
        },
        pt: {
          text: {
            type: String,
          },
        },
        ro: {
          text: {
            type: String,
          },
        },
        ru: {
          text: {
            type: String,
          },
        },
        sd: {
          text: {
            type: String,
          },
        },
        so: {
          text: {
            type: String,
          },
        },
        sq: {
          text: {
            type: String,
          },
        },
        sv: {
          text: {
            type: String,
          },
        },

        //
        hi: {
          text: {
            type: String,
          },
        },
        id_l: {
          text: {
            type: String,
          },
        },
        it: {
          text: {
            type: String,
          },
        },
        // the end of the object
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model<ISurah>("Surah", SurahSchema);

export default Section;
