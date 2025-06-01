import { View, Text, StyleSheet } from 'react-native'
const Index = (): JSX.Element => {
  return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo-App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>
            <View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListTitle}>買い物リスト</Text>
                        <Text style={styles.memoListDate}>2025年1月20日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
               <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListTitle}>買い物リスト</Text>
                        <Text style={styles.memoListDate}>2025年1月20日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
               <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListTitle}>買い物リスト</Text>
                        <Text style={styles.memoListDate}>2025年1月20日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467fD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#484844'
  }
})

export default Index
