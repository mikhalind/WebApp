namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: DefaultOpenIdUserChangeValidatorSchema

	/// <exclude/>
	public class DefaultOpenIdUserChangeValidatorSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultOpenIdUserChangeValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultOpenIdUserChangeValidatorSchema(DefaultOpenIdUserChangeValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0");
			Name = "DefaultOpenIdUserChangeValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,205,106,227,48,16,62,39,144,119,152,122,47,54,4,63,64,187,93,72,156,166,248,144,54,224,118,47,165,44,138,53,182,5,182,100,244,83,48,33,239,94,89,114,211,120,73,104,142,154,209,247,51,243,73,192,73,131,170,37,57,194,114,187,201,68,161,227,68,240,130,149,70,18,205,4,143,159,91,228,41,93,24,93,205,166,251,217,116,98,20,227,37,100,157,210,216,220,29,207,223,88,137,231,171,241,3,215,76,51,84,23,218,107,146,107,33,125,223,222,248,37,177,180,242,144,212,68,169,91,88,97,65,76,173,189,153,87,133,50,169,8,47,241,47,169,25,37,22,231,48,111,195,173,37,227,212,242,135,186,107,81,20,97,122,17,21,69,239,22,214,154,93,205,114,200,123,165,31,133,224,22,46,243,89,178,189,115,114,180,191,65,93,9,106,7,216,58,17,223,28,4,119,66,212,144,16,238,73,122,186,208,113,10,206,49,239,119,15,102,116,156,131,91,97,7,170,83,11,218,48,254,202,153,222,8,202,10,134,52,130,62,156,201,228,209,48,234,112,41,133,251,179,55,227,71,212,47,118,51,52,17,181,105,184,53,111,240,119,15,251,19,6,41,13,162,59,199,243,65,36,168,188,194,134,88,154,177,15,159,100,151,185,238,134,112,82,162,236,73,83,174,52,225,57,46,187,39,251,166,194,32,59,17,31,209,158,212,123,143,142,39,78,36,18,141,158,58,28,11,14,88,165,165,77,245,237,29,254,229,206,185,122,17,107,212,121,101,57,246,16,184,80,86,153,217,5,115,8,22,22,247,129,1,28,60,146,21,16,222,156,202,198,14,184,150,162,89,45,195,81,195,79,21,111,37,107,136,236,252,138,226,126,158,249,176,213,249,255,242,209,215,234,39,18,181,145,28,180,52,232,117,15,71,117,239,61,78,213,147,169,235,103,249,208,180,118,202,145,240,185,84,60,202,230,242,61,92,116,157,220,181,185,247,111,208,242,15,251,138,224,126,252,102,174,193,252,228,103,40,23,164,86,190,126,24,190,8,114,234,127,137,59,251,234,184,120,128,217,244,19,73,170,120,17,161,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0"));
		}

		#endregion

	}

	#endregion

}

