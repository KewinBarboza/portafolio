import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer'
import PERSONA from '@/data/persona.js'
import EXPERIENCIA from '@/data/experiencia.js'

const { nombre, profesion, correo, carrera, portafolio, direccion, educacion, skills, tecnologias, foto } = PERSONA
const { universidad, graduacion, lugar, titulo } = educacion[0]

export const MyCv = () => {

  return (
    <Document>
      <Page size="LETTER" style={styles.body}>
        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 5, marginBottom: 5 }}>
          <Image style={styles.image} src={foto} />
          <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
            <Text style={styles.name}>{nombre}</Text>
            <View style={styles.divider} />

            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: 7, paddingHorizontal: 15, marginBottom: 10 }}>
              <View>
                <Text style={styles.text}>{profesion}</Text>
                <Text style={styles.text}>{carrera}</Text>
                <Text style={styles.text}>{direccion}</Text>
              </View>
              <View>
                <Text style={styles.text}>{correo}</Text>
                <Text style={styles.text}>{portafolio}</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.title}>EXPERIENCIA PROFESIONAL</Text>
        <View style={styles.divider} />
        <View>
          {
            EXPERIENCIA.map(({ nombre, proyectos, tiempo, cargo, lugar, stack }, index) => (
              <View key={index}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 2 }}>
                  <View>
                    <Text style={styles.subtitle}>{nombre}</Text>
                    <View style={{ flexDirection: "row", gap: 5, marginTop: 1 }}>
                      <Text style={styles.text}>{cargo} - </Text>
                      <Text style={styles.textSecondary}>{stack.join("-")}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[styles.text, { fontWeight: 'semibold' }]}>{lugar}</Text>
                    <Text style={[styles.text, { fontStyle: "italic" }]}>{tiempo}</Text>
                  </View>
                </View>

                <View style={{ paddingBottom: 2, paddingLeft: 15 }}>
                  {
                    proyectos.map(({ descripcion }, index) => (
                      <View key={index} style={{ marginVertical: 2 }}>
                        <Text style={styles.text}> • {descripcion}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
            ))
          }
        </View>

        <Text style={[styles.title, { marginTop: 15 }]}>EDUCACIÓN</Text>
        <View style={styles.divider} />
        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 2 }}>
          <View>
            <Text style={styles.subtitle}>{universidad}</Text>
            <Text style={styles.text}>{titulo}</Text>
          </View>
          <View>
            <Text style={[styles.text, { fontWeight: 'semibold' }]}>{lugar}</Text>
            <Text style={[styles.text, { fontStyle: "italic" }]}>{graduacion}</Text>
          </View>
        </View>

        <Text style={[styles.title, { marginTop: 15 }]}>SKILLS ADICIONALES</Text>
        <View style={styles.divider} />
        <View style={{ paddingBottom: 2, paddingLeft: 15 }}>
          {
            skills.map((skill, index) => (
              <View key={index} style={{ marginVertical: 2 }}>
                <Text style={styles.text}> • {skill}</Text>
              </View>
            ))
          }
        </View>
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    color: '#0e0e0e',
  },
  name: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '900',
    fontFamily: 'Times-Roman',
  },
  title: {
    fontSize: 11,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Times-Roman',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'semibold',
    fontFamily: 'Times-Roman'
  },
  text: {
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  textSecondary: {
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    color: "#404040",
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#0e0e0e',
  },
  image: {
    aspectRatio: 5 / 6,
    objectFit: 'cover',
    width: 50,
    height: 54,
    borderRadius: 5,
  },
})
