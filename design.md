name: DevFocus Light (Nexoria Clean)
colors:
  primary: "#2666fdda"       # ブランドカラーの青はそのまま活かします
  secondary: "#64748B"     # 視認性を担保した落ち着いたグレー
  surface: "#F8FAFC"       # 眩しすぎない、洗練されたニュアンスのある白ベース
  on-surface: "#0F172A"    # 真っ黒ではない、高級感のあるネイビーグレー（可読性◎）
  error: "#BA1A1A"         # ライトモード用に調整した視認性の高い赤
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
rounded:
  md: 12px                 # 白ベースに合わせて角丸をほんの少し滑らかに（8pxから12pxへ）

  Do's and Don'ts
Do: 余白（Padding）をダークモードの時よりも1.2倍ほど広めに取り、空気感のあるラグジュアリーな「白」を演出する。

Don't: テキストに純粋な真っ黒（#000000）を使わない。コントラストが強すぎてチープな印象になってしまいます。

Do: スきルタグやカテゴリタブの背景には、#F1F5F9 などの非常に薄いグレーを敷いて、文字とのコントラスト（4.5:1以上）を維持する。