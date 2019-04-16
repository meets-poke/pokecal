/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $gvars = Opal.gvars, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$setPrefixes', '$debug', '$upcase', '$===', '$mh_cc_table', '$mh_acl_table', '$mh_acs_table', '$mh_crc_table', '$to_i', '$parren_killer', '$+', '$rollHit', '$!', '$empty?', '$gsub', '$!=', '$==', '$>=', '$<=', '$roll', '$getHitResult', '$getResult', '$%', '$>', '$get_table_by_nDx', '$to_s', '$<', '$-', '$nil?', '$[]', '$each']);
  return (function($base, $super, $parent_nesting) {
    function $MetalHead(){};
    var self = $MetalHead = $klass($base, $super, 'MetalHead', $MetalHead);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_MetalHead_initialize_1, TMP_MetalHead_gameName_2, TMP_MetalHead_gameType_3, TMP_MetalHead_getHelpMessage_4, TMP_MetalHead_rollDiceCommand_5, TMP_MetalHead_changeText_8, TMP_MetalHead_check_2D6_9, TMP_MetalHead_rollHit_10, TMP_MetalHead_check_1D100_11, TMP_MetalHead_getHitResult_12, TMP_MetalHead_getResult_13, TMP_MetalHead_mh_cc_table_14, TMP_MetalHead_mh_acl_table_15, TMP_MetalHead_mh_acs_table_16, TMP_MetalHead_mh_crc_table_19;

    
    self.$setPrefixes(["AR", "SR", "HR<=.+", "CC", "ACT", "ACL", "ACS", "CRC[A-Z]\\d+"]);
    
    Opal.defn(self, '$initialize', TMP_MetalHead_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_MetalHead_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_MetalHead_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_MetalHead_initialize_1, false), $zuper, $iter)
    }, TMP_MetalHead_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_MetalHead_gameName_2 = function $$gameName() {
      var self = this;

      return "メタルヘッド"
    }, TMP_MetalHead_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_MetalHead_gameType_3 = function $$gameType() {
      var self = this;

      return "MetalHead"
    }, TMP_MetalHead_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_MetalHead_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・アビリティロール  AR>=目標値\n" + "・スキルロール      SR<=目標値(%)\n" + "・命中判定ロール    HR<=目標値(%)\n" + "\n" + "  例）AR>=5\n" + "  例）SR<=(40+25)\n" + "  例）HR<=(50-10)\n" + "\n" + "  これらのロールで成否、絶対成功/絶対失敗、クリティカル/アクシデントを自動判定します。\n" + "\n" + "・クリティカルチャート  CC\n" + "・アクシデントチャート  射撃・投擲用:ACL  格闘用:ACS\n" + "・戦闘結果チャート      CRCsn   s=耐久レベル(SUV) n=数値\n" + "\n" + "  例）CRCA61 SUV=Aを対象とした数値61(62に変換される)の戦闘結果を参照する。\n" + "  例）CRCM98 対物で数値98の戦闘結果を参照する。\n"
    }, TMP_MetalHead_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_MetalHead_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, $b, $c, self = this, tableName = nil, tableNumber = nil, tableResult = nil, $case = nil, target = nil;

      
      self.$debug("rollDiceCommand", command);
      tableName = "";
      tableNumber = "";
      tableResult = "";
      $case = command.$upcase();
      if (/^CC/['$===']($case)) {$b = self.$mh_cc_table(), $a = Opal.to_ary($b), (tableName = ($a[0] == null ? nil : $a[0])), (tableResult = ($a[1] == null ? nil : $a[1])), (tableNumber = ($a[2] == null ? nil : $a[2])), $b}
      else if (/^ACL/['$===']($case)) {$b = self.$mh_acl_table(), $a = Opal.to_ary($b), (tableName = ($a[0] == null ? nil : $a[0])), (tableResult = ($a[1] == null ? nil : $a[1])), (tableNumber = ($a[2] == null ? nil : $a[2])), $b}
      else if (/^ACS/['$===']($case)) {$b = self.$mh_acs_table(), $a = Opal.to_ary($b), (tableName = ($a[0] == null ? nil : $a[0])), (tableResult = ($a[1] == null ? nil : $a[1])), (tableNumber = ($a[2] == null ? nil : $a[2])), $b}
      else if (/^CRC(\w)(\d+)/['$===']($case)) {$b = self.$mh_crc_table((($c = $gvars['~']) === nil ? nil : $c['$[]'](1)), (($c = $gvars['~']) === nil ? nil : $c['$[]'](2))), $a = Opal.to_ary($b), (tableName = ($a[0] == null ? nil : $a[0])), (tableResult = ($a[1] == null ? nil : $a[1])), (tableNumber = ($a[2] == null ? nil : $a[2])), $b}
      else if (/^HR<=(.+)$/['$===']($case)) {
      target = self.$parren_killer($rb_plus($rb_plus("(", (($a = $gvars['~']) === nil ? nil : $a['$[]'](1))), ")")).$to_i();
      return self.$rollHit(target);};
      if ($truthy(tableName['$empty?']()['$!']())) {
        return "" + (tableName) + " ＞ " + (tableNumber) + " ＞ " + (tableResult)
        } else {
        return nil
      };
    }, TMP_MetalHead_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$changeText', TMP_MetalHead_changeText_8 = function $$changeText(string) {
      var TMP_6, TMP_7, self = this;

      
      string = $send(string, 'gsub', [/^(S)?AR/i], (TMP_6 = function(){var self = TMP_6.$$s || this, $a;

      return "" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "2D6"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/^(S)?SR/i], (TMP_7 = function(){var self = TMP_7.$$s || this, $a;

      return "" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "1D100"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      return string;
    }, TMP_MetalHead_changeText_8.$$arity = 1);
    
    Opal.defn(self, '$check_2D6', TMP_MetalHead_check_2D6_9 = function $$check_2D6(totalValue, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      
      if ($truthy(signOfInequality['$!='](">="))) {
        return ""};
      if ($truthy(diff['$==']("?"))) {
        return ""};
      if ($truthy($rb_ge(dice_n, 12))) {
        return " ＞ 絶対成功"};
      if ($truthy($rb_le(dice_n, 2))) {
        return " ＞ 絶対失敗"};
      if ($truthy($rb_ge(totalValue, diff))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_MetalHead_check_2D6_9.$$arity = 8);
    
    Opal.defn(self, '$rollHit', TMP_MetalHead_rollHit_10 = function $$rollHit(target) {
      var $a, $b, self = this, total = nil, resultText = nil, text = nil;

      
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), $b;
      resultText = self.$getHitResult(total, total, target);
      text = "" + "(1D100<=" + (target) + ") ＞ " + (total) + (resultText);
      return text;
    }, TMP_MetalHead_rollHit_10.$$arity = 1);
    
    Opal.defn(self, '$check_1D100', TMP_MetalHead_check_1D100_11 = function $$check_1D100(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      
      if ($truthy(signOfInequality['$==']("<="))) {
        } else {
        return ""
      };
      return self.$getResult(total_n, dice_n, diff);
    }, TMP_MetalHead_check_1D100_11.$$arity = 8);
    
    Opal.defn(self, '$getHitResult', TMP_MetalHead_getHitResult_12 = function $$getHitResult(total_n, dice_n, diff) {
      var self = this, diceValue = nil, dice1 = nil;

      
      diceValue = total_n['$%'](100);
      dice1 = diceValue['$%'](10);
      self.$debug("total_n", total_n);
      if ($truthy($rb_gt(total_n, diff))) {
        return " ＞ 失敗"};
      if ($truthy(dice1['$=='](1))) {
        return " ＞ 成功（クリティカル）"};
      if ($truthy(dice1['$=='](0))) {
        return " ＞ 失敗（アクシデント）"};
      return " ＞ 成功";
    }, TMP_MetalHead_getHitResult_12.$$arity = 3);
    
    Opal.defn(self, '$getResult', TMP_MetalHead_getResult_13 = function $$getResult(total_n, dice_n, diff) {
      var self = this;

      
      if ($truthy($rb_le(dice_n, 5))) {
        return " ＞ 絶対成功"};
      if ($truthy($rb_ge(dice_n, 96))) {
        return " ＞ 絶対失敗"};
      if ($truthy($rb_le(total_n, diff))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_MetalHead_getResult_13.$$arity = 3);
    
    Opal.defn(self, '$mh_cc_table', TMP_MetalHead_mh_cc_table_14 = function $$mh_cc_table() {
      var $a, $b, self = this, name = nil, table = nil, result = nil, num = nil;

      
      name = "クリティカルチャート";
      table = ["相手は知覚系に多大なダメージを受けた。PERを1にして頭部にHWのダメージ、および心理チェック。", "相手の運動神経を断ち切った。DEXを1にして腕部にHWのダメージ、および心理チェック。さらに腕に持っていた武器などは落としてしまう。", "相手の移動手段は完全に奪われた。REFを1にして脚部にHWダメージと心理チェック。また、次回からのこちらの攻撃は必ず命中する。", "相手の急所に命中。激痛のため気絶した上、胴にHWダメージ。", "相手の急所に命中。激痛のため気絶した上、胴にHWダメージ。", "効果的な一撃。胴にHWダメージ。心理チェック。", "効果的な一撃。胴にMOダメージ。心理チェック。", "君の一撃は相手の中枢を完全に破壊した。即死である。", "君の一撃は相手の中枢を完全に破壊した。即死である。", "君の一撃は相手の中枢を完全に破壊した。即死である。"];
      $b = self.$get_table_by_nDx(table, 1, 10), $a = Opal.to_ary($b), (result = ($a[0] == null ? nil : $a[0])), (num = ($a[1] == null ? nil : $a[1])), $b;
      return [name, result, num];
    }, TMP_MetalHead_mh_cc_table_14.$$arity = 0);
    
    Opal.defn(self, '$mh_acl_table', TMP_MetalHead_mh_acl_table_15 = function $$mh_acl_table() {
      var $a, $b, self = this, name = nil, table = nil, result = nil, num = nil;

      
      name = "アクシデントチャート（射撃・投擲）";
      table = ["ささいなミス。特にペナルティーはない。", "ささいなミス。特にペナルティーはない。", "ささいなミス。特にペナルティーはない。", "ささいなミス。特にペナルティーはない。", "ささいなミス。特にペナルティーはない。", "ささいなミス。特にペナルティーはない。", "ささいなミス。特にペナルティーはない。", "不発、またはジャム。弾を取り出さねばならない物は次のターンは射撃できない。", "ささいな故障。可能なら次のターンから個別武器のスキルロールで修理を行える。", "武器の暴発、または爆発。頭部HWの心理効果ロール。さらに、その武器は破壊されPERとDEXのどちらか、または両方に計2ポイントのマイナスを与える。（遠隔操作の場合、射手への被害は無し）"];
      $b = self.$get_table_by_nDx(table, 1, 10), $a = Opal.to_ary($b), (result = ($a[0] == null ? nil : $a[0])), (num = ($a[1] == null ? nil : $a[1])), $b;
      return [name, result, num];
    }, TMP_MetalHead_mh_acl_table_15.$$arity = 0);
    
    Opal.defn(self, '$mh_acs_table', TMP_MetalHead_mh_acs_table_16 = function $$mh_acs_table() {
      var $a, $b, self = this, name = nil, table = nil, result = nil, num = nil;

      
      name = "アクシデントチャート（格闘）";
      table = ["足を滑らせて転倒し、起き上がるまで相手に+20の命中修正を与える。", "足を滑らせて転倒し、起き上がるまで相手に+20の命中修正を与える。", "足を滑らせて転倒し、起き上がるまで相手に+20の命中修正を与える。", "手を滑らせて、武器を落とす。素手の時は関係ない。", "手を滑らせて、武器を落とす。素手の時は関係ない。", "手を滑らせて、武器を落とす。素手の時は関係ない。", "使用武器の破壊。素手戦闘のときはMWのダメージを受ける。", "使用武器の破壊。素手戦闘のときはMWのダメージを受ける。", "使用武器の破壊。素手戦闘のときはMWのダメージを受ける。", "手を滑らせ、不幸にも武器は飛んでいき、5m以内に人がいれば誰かに刺さるか、または打撃を与えるかもしれない。ランダムに決定し、普通どおり判定を続ける。素手のときは関係ない。"];
      $b = self.$get_table_by_nDx(table, 1, 10), $a = Opal.to_ary($b), (result = ($a[0] == null ? nil : $a[0])), (num = ($a[1] == null ? nil : $a[1])), $b;
      return [name, result, num];
    }, TMP_MetalHead_mh_acs_table_16.$$arity = 0);
    return (Opal.defn(self, '$mh_crc_table', TMP_MetalHead_mh_crc_table_19 = function $$mh_crc_table(suv, num) {
      var TMP_17, self = this, name = nil, numbuf = nil, num_d1 = nil, table_point = nil, table_damage = nil, damage_level = nil, result = nil;

      
      name = "戦闘結果チャート";
      suv = suv.$to_s().$upcase();
      numbuf = num.$to_i();
      if ($truthy($rb_lt(numbuf, 1))) {
        return [name, "数値が不正です", num]};
      num_d1 = numbuf['$%'](10);
      self.$debug("" + "num_d1[" + (num_d1) + "]");
      if ($truthy(num_d1['$=='](1))) {
        numbuf = $rb_plus(numbuf, 1)};
      if ($truthy(num_d1['$=='](0))) {
        numbuf = $rb_minus(numbuf, 1)};
      num_d1 = numbuf['$%'](10);
      self.$debug("" + "num_d1[" + (num_d1) + "]");
      table_point = [nil, nil, "腕部", "腕部", "脚部", "脚部", "胴部", "胴部", "胴部", "頭部"];
      table_damage = $hash2(["S", "A", "B", "C", "D", "E", "F", "G", "M"], {"S": [$hash2(["N"], {"N": 2}), $hash2(["LW"], {"LW": 16}), $hash2(["MD"], {"MD": 46}), $hash2(["MW"], {"MW": 56}), $hash2(["HD"], {"HD": 76}), $hash2(["HW"], {"HW": 96}), $hash2(["MO"], {"MO": 106}), $hash2(["K"], {"K": 116})], "A": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 46}), $hash2(["HW"], {"HW": 76}), $hash2(["MO"], {"MO": 96}), $hash2(["K"], {"K": 116})], "B": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 36}), $hash2(["HW"], {"HW": 66}), $hash2(["MO"], {"MO": 96}), $hash2(["K"], {"K": 106})], "C": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 26}), $hash2(["HW"], {"HW": 66}), $hash2(["MO"], {"MO": 86}), $hash2(["K"], {"K": 106})], "D": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 26}), $hash2(["HW"], {"HW": 46}), $hash2(["MO"], {"MO": 76}), $hash2(["K"], {"K": 96})], "E": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 26}), $hash2(["HW"], {"HW": 39}), $hash2(["MO"], {"MO": 54}), $hash2(["K"], {"K": 76})], "F": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 16}), $hash2(["HW"], {"HW": 39}), $hash2(["MO"], {"MO": 54}), $hash2(["K"], {"K": 66})], "G": [$hash2(["LW"], {"LW": 2}), $hash2(["MW"], {"MW": 6}), $hash2(["HW"], {"HW": 16}), $hash2(["MO"], {"MO": 26}), $hash2(["K"], {"K": 39})], "M": [$hash2(["0"], {"0": 2}), $hash2(["1"], {"1": 22}), $hash2(["2"], {"2": 42}), $hash2(["3"], {"3": 62}), $hash2(["4"], {"4": 82}), $hash2(["5"], {"5": 92}), $hash2(["6"], {"6": 102}), $hash2(["8"], {"8": 112})]});
      if ($truthy(table_damage['$[]'](suv)['$nil?']())) {
        return [name, "" + "耐久レベル(SUV)[" + (suv) + "] ＞ 耐久レベル(SUV)の値が不正です", num]};
      damage_level = "";
      $send(table_damage['$[]'](suv), 'each', [], (TMP_17 = function(v){var self = TMP_17.$$s || this, TMP_18;
if (v == null) v = nil;
      return $send(v, 'each', [], (TMP_18 = function(d, n){var self = TMP_18.$$s || this;
if (d == null) d = nil;if (n == null) n = nil;
        
          self.$debug("" + "suv[" + (suv) + "] " + (v) + " " + (d) + " " + (n));
          if ($truthy($rb_le(n, numbuf))) {
            return (damage_level = d)
            } else {
            return nil
          };}, TMP_18.$$s = self, TMP_18.$$arity = 2, TMP_18))}, TMP_17.$$s = self, TMP_17.$$arity = 1, TMP_17));
      result = "";
      if ($truthy(numbuf['$!='](num.$to_i()))) {
        result = "" + (numbuf) + " ＞ "};
      if ($truthy(suv['$==']("M"))) {
        result = $rb_plus(result, "" + "耐物 ＞ HP[" + (damage_level) + "]")
        } else {
        result = $rb_plus(result, "" + "耐久レベル(SUV)[" + (suv) + "] ＞ 部位[" + (table_point['$[]'](num_d1)) + "] ： 損傷種別[" + (damage_level) + "]")
      };
      return [name, result, num];
    }, TMP_MetalHead_mh_crc_table_19.$$arity = 2), nil) && 'mh_crc_table';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);